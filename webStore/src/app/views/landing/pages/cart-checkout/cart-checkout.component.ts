import { Component, OnInit } from '@angular/core';
import { OrderRequest } from 'src/app/models/OrderRequest';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {

  public sessionId: string;
  public orderRequest: OrderRequest[] = []; // declare the request array

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    // When the component loads, I am initializing the orderRequest with fixed value.
    this.orderRequest.push({
      InventoryItemId: 1,
      Quantity: 3
    },
    {
      InventoryItemId: 2,
      Quantity: 2
    },
    {
      InventoryItemId: 3,
      Quantity: 5
    });
  }

  submit(){
    this.service.initSession(this.orderRequest).subscribe(resp => console.log(resp));
  }

}
