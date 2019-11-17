import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountserviceComponent } from './accountservice.component';

describe('AccountserviceComponent', () => {
  let component: AccountserviceComponent;
  let fixture: ComponentFixture<AccountserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
