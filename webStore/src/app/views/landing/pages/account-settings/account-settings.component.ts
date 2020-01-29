import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  public showTitle = false;
  public category = [
    {
      name: "INFORMATION",
      route: '/app-account/app-account-settings/app-setting-information'
    },
    {
      name: "ADDRESSES",
      route: '/app-account/app-account-settings/app-setting-addresses'
    },
    {
      name: "PAYMENT OPTIONS",
      route: '/app-account/app-account-settings/app-setting-payment'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
