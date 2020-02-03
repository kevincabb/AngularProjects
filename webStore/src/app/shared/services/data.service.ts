import { Injectable } from '@angular/core';
import { items } from '../interfaces/items';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  filter: string = "all";
  products: items[] = [
    {
      img: "../../../assets/images/hoody.png",
      id: "1",
      name: "hoodie",
      type: "apparel",
      price: 200,
      quantity: 0,
      sold: false
    },
    {
      img: "../../../assets/images/slippers.png",
      id: "2",
      name: "slippers",
      type: "shoes",
      price: 100,
      quantity: 0,
      sold: false
    },
    {
      img: "../../../assets/images/watch.png",
      id: "3",
      name: "watch",
      type: "misc",
      price: 150,
      quantity: 0,
      sold: false
    },
    {
      img: "../../../assets/images/hoody.png",
      id: "4",
      name: "Sweater",
      type: "apparel",
      price: 100,
      quantity: 0,
      sold: false
    },
    {
      img: "../../../assets/images/slippers.png",
      id: "5",
      name: "Camo Slides",
      type: "shoes",
      price: 50,
      quantity: 0,
      sold: false
    },
    {
      img: "../../../assets/images/watch.png",
      id: "6",
      name: "Replica Watch",
      type: "misc",
      price: 20,
      quantity: 0,
      sold: false
    }
  ];

  $products = new BehaviorSubject<items[]>(this.products);
  $filter = new BehaviorSubject<string>(this.filter);
  
  constructor() { }

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
