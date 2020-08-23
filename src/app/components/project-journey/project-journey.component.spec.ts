import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJourneyComponent } from './project-journey.component';

describe('ProjectJourneyComponent', () => {
  let component: ProjectJourneyComponent;
  let fixture: ComponentFixture<ProjectJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
