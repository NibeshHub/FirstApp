import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessloggedComponent } from './successlogged.component';

describe('SuccessloggedComponent', () => {
  let component: SuccessloggedComponent;
  let fixture: ComponentFixture<SuccessloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
