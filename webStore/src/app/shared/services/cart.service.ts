import { Injectable } from '@angular/core';
import { items } from '../interfaces/items';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: items[] = [];
  totalItems: number = 0;
  cartQuantity = 0;

  $cartItems = new BehaviorSubject<items[]>(this.cartItems);
  $totalItems = new BehaviorSubject<number>(this.totalItems);
  $cartQuantity = new BehaviorSubject<number>(this.cartQuantity)

  constructor() { }

  addItemsToCart(item){
    let cartItem = this.cartItems.find(x=> x.id === item.id);

    if(cartItem){
      cartItem.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }

    this.cartQuantity++;
    this.totalItems += +item.price;

    this.$totalItems.next(this.totalItems);
    this.$cartItems.next(this.cartItems);
    this.$cartQuantity.next(this.cartQuantity);
  }

  getCartProducts(): items[] {
    return this.cartItems;
  }

  getTotalPrice(): number{
    return this.totalItems;
  }

  removeProduct(item, index) {
    this.cartItems.splice(index, 1);
    this.totalItems -= item.price;
    this.cartQuantity--;

    this.$cartItems.next(this.cartItems);
    this.$totalItems.next(this.totalItems);
    this.$cartQuantity.next(this.cartQuantity);
  }
}
