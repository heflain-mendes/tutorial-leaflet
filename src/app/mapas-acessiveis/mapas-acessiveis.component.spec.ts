import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasAcessiveisComponent } from './mapas-acessiveis.component';

describe('MapasAcessiveisComponent', () => {
  let component: MapasAcessiveisComponent;
  let fixture: ComponentFixture<MapasAcessiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapasAcessiveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapasAcessiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
