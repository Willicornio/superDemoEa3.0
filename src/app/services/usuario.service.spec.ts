
import { TestBed, async } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioService = TestBed.get(UsuarioService);
    expect(service).toBeTruthy();
  });

  function setup() {
    const fixture = TestBed.createComponent(UsuarioService);
    const app = fixture.debugElement.componentInstance;
    return { fixture, app };
  }

  it('should have h1 tag as \'Welcome Angulat7-unit-testing!\'', async(() => {
    const { app, fixture } = setup();
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const h1tag = compile.querySelector('h1');
    expect(h1tag.textContent).toBe(' Welcome to Angular7-unit-testing!! ');
  }));
});
