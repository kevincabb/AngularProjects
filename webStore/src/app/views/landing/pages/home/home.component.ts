import { Component, OnInit, Input } from '@angular/core';
import { items } from 'src/app/shared/interfaces/items';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productList: items[];
  public filter: string;
  public add = "Description";
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
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.dService.$products.subscribe(items => {
      this.productList = items;
    });
    
    this.dService.$filter.subscribe(string => {
      this.filter = string;
    });

    this.productList = this.dService.getProducts();
  }

  

}
