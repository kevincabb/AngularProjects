import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { items } from 'src/app/shared/interfaces/items';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.scss']
})
export class CartHomeComponent implements OnInit {
  public cartProducts: items[];
  public add = "Description";
  public cartPage = true;
  cartTotal = 0; 

  constructor(private cartService: CartService, private dService: DataService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      this.cartProducts = items;
    });

    this.cartService.$totalItems.subscribe(total => {
      this.cartTotal = total
    });

    this.cartProducts = this.cartService.getCartProducts();
    
  }

}
