import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritButtonComponent } from './favourit-button.component';

describe('FavouritButtonComponent', () => {
  let component: FavouritButtonComponent;
  let fixture: ComponentFixture<FavouritButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
