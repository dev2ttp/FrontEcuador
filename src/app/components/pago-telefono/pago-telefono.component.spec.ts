import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTelefonoComponent } from './pago-telefono.component';

describe('PagoTelefonoComponent', () => {
  let component: PagoTelefonoComponent;
  let fixture: ComponentFixture<PagoTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
