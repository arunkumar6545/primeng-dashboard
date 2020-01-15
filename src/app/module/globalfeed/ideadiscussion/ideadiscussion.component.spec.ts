import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeadiscussionComponent } from './ideadiscussion.component';

describe('IdeadiscussionComponent', () => {
  let component: IdeadiscussionComponent;
  let fixture: ComponentFixture<IdeadiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeadiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeadiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
