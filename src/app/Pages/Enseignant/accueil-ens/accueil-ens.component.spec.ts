import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEnsComponent } from './accueil-ens.component';

describe('AccueilEnsComponent', () => {
  let component: AccueilEnsComponent;
  let fixture: ComponentFixture<AccueilEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilEnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
