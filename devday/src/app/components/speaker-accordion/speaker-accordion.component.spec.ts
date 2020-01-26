import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerAccordionComponent } from './speaker-accordion.component';

describe('SpeakerAccordionComponent', () => {
  let component: SpeakerAccordionComponent;
  let fixture: ComponentFixture<SpeakerAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
