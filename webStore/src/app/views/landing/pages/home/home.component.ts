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
  public add = "Description";
  public titleName = "CABS.CLOSET";
  public showTitle = true;
  public sortN;
  public type;
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
    // this.dService.getInventory().subscribe(items => {
    //   console.log(items);
    // });
    
    this.productList = this.dService.getProducts();
    console.log(this.productList);
  }

  sort(item){
    this.sortN = item;
    console.log(this.sortN);
  }
  

}
