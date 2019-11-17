import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RserverComponent } from './rserver.component';

describe('RserverComponent', () => {
  let component: RserverComponent;
  let fixture: ComponentFixture<RserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
