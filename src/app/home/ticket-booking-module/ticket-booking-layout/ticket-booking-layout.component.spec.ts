import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookingLayoutComponent } from './ticket-booking-layout.component';

describe('TicketBookingLayoutComponent', () => {
  let component: TicketBookingLayoutComponent;
  let fixture: ComponentFixture<TicketBookingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBookingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBookingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
