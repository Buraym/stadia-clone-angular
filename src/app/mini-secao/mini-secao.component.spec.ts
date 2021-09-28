import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSecaoComponent } from './mini-secao.component';

describe('MiniSecaoComponent', () => {
  let component: MiniSecaoComponent;
  let fixture: ComponentFixture<MiniSecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniSecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
