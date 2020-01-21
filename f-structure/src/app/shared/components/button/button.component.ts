import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() btnLabel: string;
@Output() clickButton = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickButton.emit();
  }
}
