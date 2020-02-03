import { TestBed } from '@angular/core/testing';

import { FilteredService } from './filtered.service';

describe('FilteredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilteredService = TestBed.get(FilteredService);
    expect(service).toBeTruthy();
  });
});
