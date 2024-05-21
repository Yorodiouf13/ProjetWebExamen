import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilGeneralComponent } from './accueil-general.component';

describe('AccueilGeneralComponent', () => {
  let component: AccueilGeneralComponent;
  let fixture: ComponentFixture<AccueilGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
