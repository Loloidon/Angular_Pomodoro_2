import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupinterfaceComponent } from './signupinterface.component';

describe('SignupinterfaceComponent', () => {
  let component: SignupinterfaceComponent;
  let fixture: ComponentFixture<SignupinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupinterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
