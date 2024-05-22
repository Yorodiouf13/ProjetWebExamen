import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourExamComponent } from './jour-exam.component';

describe('JourExamComponent', () => {
  let component: JourExamComponent;
  let fixture: ComponentFixture<JourExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JourExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
