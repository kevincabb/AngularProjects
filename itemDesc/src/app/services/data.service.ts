import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public products = [
  {
    id: '1',
    pName: 'Ninja Stars',
    pNameURL: 'NinjaStars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: 'View in Cart'
  },
  {
    id: '2',
    pName: 'Ninja bars',
    pNameURL: 'Ninjabars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: 'View in Cart'
  },
  {
    id: '3',
    pName: 'Ninja',
    pNameURL: 'Ninrs',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'Cause Paper Cuts',
    price: 'View in Cart'
  },
  {
    id: '4',
    pName: 'Stars',
    pNameURL: 'Stars',
    pDesc: 'Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: 'View in Cart'
  }
]
  
  constructor() { }

  getProducts(): IProduct[] {
    return this.products;

  }

  getProduct(sku: string): Observable<IProduct>{
    return of(
      this.products.find(
        x => x.id === sku
      )
    );
  }
}
