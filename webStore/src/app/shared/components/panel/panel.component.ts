import { Component, OnInit, Input } from '@angular/core';
import { items } from '../../interfaces/items';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  cartItems: items[];
  filter: string;
  @Input() products: items;
  @Input() button;
  @Input() page;
  
  constructor(private dService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });
    
    this.dService.$filter.subscribe(string => {
      this.filter = string;
    });

    this.filter = this.dService.getFilter();
  }

  getCartItems(){
    this.cartService.getCartProducts();
  }
  
  removeFromCart(item, index){
    this.cartService.removeProduct(item, index);
    item.sold = false;
  }

  
}
