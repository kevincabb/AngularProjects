import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/shared/interfaces/items';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItems: items[];
  showList = false;
  cartTotal = 0;
  cartCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.$totalItems.subscribe(total => {
      this.cartTotal = total
    });

    this.cartService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });
  }


  toggleList(){
    this.showList = !this.showList;
  }
}
