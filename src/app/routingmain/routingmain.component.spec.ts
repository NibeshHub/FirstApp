import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingmainComponent } from './routingmain.component';

describe('RoutingmainComponent', () => {
  let component: RoutingmainComponent;
  let fixture: ComponentFixture<RoutingmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
