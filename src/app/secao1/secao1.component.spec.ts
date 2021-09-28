import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao1Component } from './secao1.component';

describe('Secao1Component', () => {
  let component: Secao1Component;
  let fixture: ComponentFixture<Secao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secao1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
