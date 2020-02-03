import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/items';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Items[] = [];
  constructor(private dservice: DataService) { }

  ngOnInit() {
      this.products = this.dservice.getProducts()
  }

  addToCart(p: Items){
    this.dservice.addToCart(p);
  }
}
