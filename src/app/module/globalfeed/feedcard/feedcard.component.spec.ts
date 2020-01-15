import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedcardComponent } from './feedcard.component';

describe('FeedcardComponent', () => {
  let component: FeedcardComponent;
  let fixture: ComponentFixture<FeedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
