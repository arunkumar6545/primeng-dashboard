import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasforumComponent } from './ideasforum.component';

describe('IdeasforumComponent', () => {
  let component: IdeasforumComponent;
  let fixture: ComponentFixture<IdeasforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
