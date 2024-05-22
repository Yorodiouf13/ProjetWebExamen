import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningExamComponent } from './planning-exam.component';

describe('PlanningExamComponent', () => {
  let component: PlanningExamComponent;
  let fixture: ComponentFixture<PlanningExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
