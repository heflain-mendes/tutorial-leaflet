import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadoresIconesPersonalizadoComponent } from './marcadores-icones-personalizado.component';

describe('MarcadoresIconesPersonalizadoComponent', () => {
  let component: MarcadoresIconesPersonalizadoComponent;
  let fixture: ComponentFixture<MarcadoresIconesPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcadoresIconesPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcadoresIconesPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
