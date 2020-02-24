import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessiongridComponent } from './sessiongrid.component';

describe('SessiongridComponent', () => {
  let component: SessiongridComponent;
  let fixture: ComponentFixture<SessiongridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessiongridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessiongridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
