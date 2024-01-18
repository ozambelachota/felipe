import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormGuardarComponent } from './usuario-form-guardar.component';

describe('UsuarioFormGuardarComponent', () => {
  let component: UsuarioFormGuardarComponent;
  let fixture: ComponentFixture<UsuarioFormGuardarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioFormGuardarComponent]
    });
    fixture = TestBed.createComponent(UsuarioFormGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
