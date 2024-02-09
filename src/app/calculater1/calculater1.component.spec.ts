import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculater1Component } from './calculater1.component';

describe('Calculater1Component', () => {
  let component: Calculater1Component;
  let fixture: ComponentFixture<Calculater1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculater1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculater1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
