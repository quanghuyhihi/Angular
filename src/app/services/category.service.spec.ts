import { TestBed } from '@angular/core/testing';

import { CateService } from './category.service';

describe('CategoryService', () => {
  let service: CateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
