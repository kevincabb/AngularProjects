import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  @Input()public menu;
  @Input()public title;

  filter: string;


  
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.filter = this.dService.getFilter();
  }

  productFilter(item){
    if(item.name === "APPAREL"){
      this.filter = "apparel";
    }
    else if(item.name === "SHOES"){
      this.filter = "shoes";
    }
    else if(item.name === "MISC"){
      this.filter = "misc";
    } else {
      this.filter = "all";
    }
  }
  

}
