import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormappmainComponent } from './formappmain.component';

describe('FormappmainComponent', () => {
  let component: FormappmainComponent;
  let fixture: ComponentFixture<FormappmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormappmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormappmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
