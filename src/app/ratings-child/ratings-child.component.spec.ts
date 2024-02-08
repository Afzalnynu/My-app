import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsChildComponent } from './ratings-child.component';

describe('RatingsChildComponent', () => {
  let component: RatingsChildComponent;
  let fixture: ComponentFixture<RatingsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
