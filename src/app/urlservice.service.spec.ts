import { TestBed } from '@angular/core/testing';

import { UrlserviceService } from './urlservice.service';

describe('UrlserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlserviceService = TestBed.get(UrlserviceService);
    expect(service).toBeTruthy();
  });
});
