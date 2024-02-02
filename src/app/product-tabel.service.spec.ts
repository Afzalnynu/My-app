import { TestBed } from '@angular/core/testing';

import { ProductTabelService } from './product-tabel.service';

describe('ProductTabelService', () => {
  let service: ProductTabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
