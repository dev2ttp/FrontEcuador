import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTelefonoComponent } from './datos-telefono.component';

describe('DatosTelefonoComponent', () => {
  let component: DatosTelefonoComponent;
  let fixture: ComponentFixture<DatosTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
