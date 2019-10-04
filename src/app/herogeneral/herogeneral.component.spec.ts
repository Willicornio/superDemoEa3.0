import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerogeneralComponent } from './herogeneral.component';

describe('HerogeneralComponent', () => {
  let component: HerogeneralComponent;
  let fixture: ComponentFixture<HerogeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerogeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerogeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
