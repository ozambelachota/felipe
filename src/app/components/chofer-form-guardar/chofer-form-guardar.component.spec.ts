import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferFormGuardarComponent } from './chofer-form-guardar.component';

describe('ChoferFormGuardarComponent', () => {
  let component: ChoferFormGuardarComponent;
  let fixture: ComponentFixture<ChoferFormGuardarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoferFormGuardarComponent]
    });
    fixture = TestBed.createComponent(ChoferFormGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
