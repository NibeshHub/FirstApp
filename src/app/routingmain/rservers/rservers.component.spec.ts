import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RserversComponent } from './rservers.component';

describe('RserversComponent', () => {
  let component: RserversComponent;
  let fixture: ComponentFixture<RserversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RserversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
