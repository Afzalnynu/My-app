import { TestBed } from '@angular/core/testing';

import { ProductFormsService } from './product-forms.service';

describe('ProductFormsService', () => {
  let service: ProductFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
