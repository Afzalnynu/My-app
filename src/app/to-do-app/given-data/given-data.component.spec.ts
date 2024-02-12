import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenDataComponent } from './given-data.component';

describe('GivenDataComponent', () => {
  let component: GivenDataComponent;
  let fixture: ComponentFixture<GivenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivenDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
