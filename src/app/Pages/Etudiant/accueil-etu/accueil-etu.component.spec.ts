import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEtuComponent } from './accueil-etu.component';

describe('AccueilEtuComponent', () => {
  let component: AccueilEtuComponent;
  let fixture: ComponentFixture<AccueilEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilEtuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
