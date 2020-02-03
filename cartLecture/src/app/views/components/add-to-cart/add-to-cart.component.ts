import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/items';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  cartItems: Items[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getProducts();
    console.log(this.cartItems);
  }

}
