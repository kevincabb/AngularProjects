import { Injectable } from '@angular/core';
import { items } from '../interfaces/items';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:5000/inventory'
  urlSheet;
  filter: string = "all";
  products: items[] = [];

  $products = new BehaviorSubject<items[]>(this.products);
  $filter = new BehaviorSubject<string>(this.filter);
  
  constructor(private http: HttpClient) {
    this.getInventory();
   }

  getInventory(){
    this.urlSheet = this.http.get(this.url);

    this.urlSheet.subscribe(x => {
      this.products.push(x);
    });
  }

  getProducts(): items[] {
    return this.products;
  }

  getFilter(): string{
    return this.filter;
  }

  getProduct(sku: string): Observable<items>{
    return of(
      this.products.find(
        x => x.id === sku
      )
    );
  }
}
