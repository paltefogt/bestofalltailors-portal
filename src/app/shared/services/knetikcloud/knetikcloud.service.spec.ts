import { TestBed } from '@angular/core/testing';

import { KnetikcloudService } from './knetikcloud.service';

describe('KnetikcloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnetikcloudService = TestBed.get(KnetikcloudService);
    expect(service).toBeTruthy();
  });
});
