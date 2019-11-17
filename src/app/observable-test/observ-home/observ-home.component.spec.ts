import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservHomeComponent } from './observ-home.component';

describe('ObservHomeComponent', () => {
  let component: ObservHomeComponent;
  let fixture: ComponentFixture<ObservHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
