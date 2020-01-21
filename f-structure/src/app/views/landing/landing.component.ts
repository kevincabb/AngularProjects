import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input()
  public parentData;

  @Output()
  public childEvent = new EventEmitter();

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onClick() {
    alert("testing");
  }

  reset() {
    this.cardService.resetCount();
  }

  fireEvent(){
    this.childEvent.emit('Output is working');
  }
}
