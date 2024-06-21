import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQcmComponent } from './create-qcm.component';

describe('CreateQcmComponent', () => {
  let component: CreateQcmComponent;
  let fixture: ComponentFixture<CreateQcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQcmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
