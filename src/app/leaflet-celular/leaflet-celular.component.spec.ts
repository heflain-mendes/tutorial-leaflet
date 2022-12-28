import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletCelularComponent } from './leaflet-celular.component';

describe('LeafletCelularComponent', () => {
  let component: LeafletCelularComponent;
  let fixture: ComponentFixture<LeafletCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletCelularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafletCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
