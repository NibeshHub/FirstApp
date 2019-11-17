import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpmainComponent } from './httpmain.component';

describe('HttpmainComponent', () => {
  let component: HttpmainComponent;
  let fixture: ComponentFixture<HttpmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
