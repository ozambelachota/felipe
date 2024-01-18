import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItinerarioComponent } from './page-itinerario.component';

describe('PageItinerarioComponent', () => {
  let component: PageItinerarioComponent;
  let fixture: ComponentFixture<PageItinerarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageItinerarioComponent]
    });
    fixture = TestBed.createComponent(PageItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
