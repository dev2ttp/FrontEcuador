import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpagoTelefonoComponent } from './finpago-telefono.component';

describe('FinpagoTelefonoComponent', () => {
  let component: FinpagoTelefonoComponent;
  let fixture: ComponentFixture<FinpagoTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpagoTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpagoTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
