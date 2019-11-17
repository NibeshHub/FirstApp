import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuserComponent } from './ouser.component';

describe('OuserComponent', () => {
  let component: OuserComponent;
  let fixture: ComponentFixture<OuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
