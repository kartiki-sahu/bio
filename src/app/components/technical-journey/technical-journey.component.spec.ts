import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalJourneyComponent } from './technical-journey.component';

describe('TechnicalJourneyComponent', () => {
  let component: TechnicalJourneyComponent;
  let fixture: ComponentFixture<TechnicalJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
