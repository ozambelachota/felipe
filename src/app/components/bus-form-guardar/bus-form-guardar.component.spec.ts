import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusFormGuardarComponent } from './bus-form-guardar.component';

describe('BusFormGuardarComponent', () => {
  let component: BusFormGuardarComponent;
  let fixture: ComponentFixture<BusFormGuardarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusFormGuardarComponent]
    });
    fixture = TestBed.createComponent(BusFormGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
