import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocrearComponent } from './herocrear.component';

describe('HerocrearComponent', () => {
  let component: HerocrearComponent;
  let fixture: ComponentFixture<HerocrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerocrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerocrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
