import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store3Component } from './store3.component';

describe('Store3Component', () => {
  let component: Store3Component;
  let fixture: ComponentFixture<Store3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Store3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Store3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
