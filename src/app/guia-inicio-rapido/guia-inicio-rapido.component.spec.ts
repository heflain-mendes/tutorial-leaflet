import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaInicioRapidoComponent } from './guia-inicio-rapido.component';

describe('GuiaInicioRapidoComponent', () => {
  let component: GuiaInicioRapidoComponent;
  let fixture: ComponentFixture<GuiaInicioRapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaInicioRapidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaInicioRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
