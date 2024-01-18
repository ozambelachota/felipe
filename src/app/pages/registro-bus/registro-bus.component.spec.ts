import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBusComponent } from './registro-bus.component';

describe('RegistroBusComponent', () => {
  let component: RegistroBusComponent;
  let fixture: ComponentFixture<RegistroBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroBusComponent]
    });
    fixture = TestBed.createComponent(RegistroBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
