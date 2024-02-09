import { TestBed } from '@angular/core/testing';

import { CalculaterService } from './calculater.service';

describe('CalculaterService', () => {
  let service: CalculaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
