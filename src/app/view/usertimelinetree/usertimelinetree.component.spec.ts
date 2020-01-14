import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertimelinetreeComponent } from './usertimelinetree.component';

describe('UsertimelinetreeComponent', () => {
  let component: UsertimelinetreeComponent;
  let fixture: ComponentFixture<UsertimelinetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertimelinetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertimelinetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
