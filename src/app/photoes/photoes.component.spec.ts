import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoesComponent } from './photoes.component';

describe('PhotoesComponent', () => {
  let component: PhotoesComponent;
  let fixture: ComponentFixture<PhotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
