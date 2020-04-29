import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargaTelefonoComponent } from './recarga-telefono.component';

describe('RecargaTelefonoComponent', () => {
  let component: RecargaTelefonoComponent;
  let fixture: ComponentFixture<RecargaTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargaTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargaTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
