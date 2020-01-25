import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  public accountMenu = ["INFORMATION", "ADDRESSES", "PAYMENT OPTIONS"];
  constructor() { }

  ngOnInit() {
  }

}
