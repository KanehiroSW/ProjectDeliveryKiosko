import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDelimanPage } from './order-deliman.page';

describe('OrderDelimanPage', () => {
  let component: OrderDelimanPage;
  let fixture: ComponentFixture<OrderDelimanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDelimanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
