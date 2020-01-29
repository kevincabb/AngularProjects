import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlaceComponent } from './cart-place.component';

describe('CartPlaceComponent', () => {
  let component: CartPlaceComponent;
  let fixture: ComponentFixture<CartPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
