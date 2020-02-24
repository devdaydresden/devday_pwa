import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTicketComponent } from './your-ticket.component';

describe('YourTicketComponent', () => {
  let component: YourTicketComponent;
  let fixture: ComponentFixture<YourTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
