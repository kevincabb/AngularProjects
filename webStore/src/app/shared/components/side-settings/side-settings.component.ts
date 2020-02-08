import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-settings',
  templateUrl: './side-settings.component.html',
  styleUrls: ['./side-settings.component.scss']
})
export class SideSettingsComponent implements OnInit {
  public display;
  @Input()public menu;
  @Input()public title;
  constructor() { }

  ngOnInit() {
  }

}
