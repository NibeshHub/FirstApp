import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRserverComponent } from './edit-rserver.component';

describe('EditRserverComponent', () => {
  let component: EditRserverComponent;
  let fixture: ComponentFixture<EditRserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
