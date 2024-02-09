import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalculaterComponent } from './input-calculater.component';

describe('InputCalculaterComponent', () => {
  let component: InputCalculaterComponent;
  let fixture: ComponentFixture<InputCalculaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalculaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
