import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titleName = "CABS.CLOSET";
  public showTitle = true;
  public category = [
    {
      name: "APPAREL"
    },
    {
      name: "SHOES"
    },
    {
      name: "MISC"
    },
    {
      name: "ALL"
    }
  ];
  public items = [
    {
      images: 'webStore/src/app/shared/images/hoody.png',
      name: 'Nike Hoody',
      type: 'apparel',
      price: '90',
      buy: '10/3'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
