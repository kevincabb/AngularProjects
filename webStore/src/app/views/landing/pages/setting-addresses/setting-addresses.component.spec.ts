import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAddressesComponent } from './setting-addresses.component';

describe('SettingAddressesComponent', () => {
  let component: SettingAddressesComponent;
  let fixture: ComponentFixture<SettingAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
