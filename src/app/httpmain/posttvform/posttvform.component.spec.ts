import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttvformComponent } from './posttvform.component';

describe('PosttvformComponent', () => {
  let component: PosttvformComponent;
  let fixture: ComponentFixture<PosttvformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttvformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttvformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
