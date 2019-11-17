import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqtestComponent } from './jqtest.component';

describe('JqtestComponent', () => {
  let component: JqtestComponent;
  let fixture: ComponentFixture<JqtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
