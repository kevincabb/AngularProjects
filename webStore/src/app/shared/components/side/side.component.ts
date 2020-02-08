import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  @Input()public menu;
  @Input()public title;
  @Output() public filterEvent = new EventEmitter();

  public display;
  


  
  constructor() { }

  ngOnInit() {
  }

  sendFilter(item){
    this.filterEvent.emit(item.name.toLowerCase());
  }
  

}
