import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerologuinComponent } from './herologuin.component';

describe('HerologuinComponent', () => {
  let component: HerologuinComponent;
  let fixture: ComponentFixture<HerologuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerologuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerologuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  function setup() {
    const fixture = TestBed.createComponent(HerologuinComponent);
    const app = fixture.debugElement.componentInstance;
    return { fixture, app };
  }

  it('should have h1 tag as \'Welcome Angulat7-unit-testing!\'', () => {
    const { app, fixture } = setup();
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const h1tag = compile.querySelector('h1');
    expect(h1tag.textContent).toBe('ol k tal');
  });

});
