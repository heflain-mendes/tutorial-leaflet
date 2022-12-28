import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoJSONComponent } from './geo-json.component';

describe('GeoJSONComponent', () => {
  let component: GeoJSONComponent;
  let fixture: ComponentFixture<GeoJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
