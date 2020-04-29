import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpagoEnvioComponent } from './finpago-envio.component';

describe('FinpagoEnvioComponent', () => {
  let component: FinpagoEnvioComponent;
  let fixture: ComponentFixture<FinpagoEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpagoEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpagoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
