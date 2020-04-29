import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEnvioComponent } from './datos-envio.component';

describe('DatosEnvioComponent', () => {
  let component: DatosEnvioComponent;
  let fixture: ComponentFixture<DatosEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
