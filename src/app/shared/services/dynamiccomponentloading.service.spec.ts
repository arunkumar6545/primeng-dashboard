import { TestBed } from '@angular/core/testing';

import { DynamiccomponentloadingService } from './dynamiccomponentloading.service';

describe('DynamiccomponentloadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamiccomponentloadingService = TestBed.get(DynamiccomponentloadingService);
    expect(service).toBeTruthy();
  });
});
