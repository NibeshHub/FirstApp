import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptappComponent } from './deptapp.component';

describe('DeptappComponent', () => {
  let component: DeptappComponent;
  let fixture: ComponentFixture<DeptappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
