import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsAdded: Items[] = [];
  products: Items[] =[
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
    }
  ]
  constructor() { }

  getProducts(): Items[] {
    return this.products;
  }

  addToCart(cartItem: Items){
    this.itemsAdded.push(cartItem);
    console.log(this.itemsAdded);
  }

  getCartItems(): Items[] {
  return this.itemsAdded;
  }
}
