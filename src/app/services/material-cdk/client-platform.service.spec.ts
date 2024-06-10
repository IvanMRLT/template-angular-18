import { TestBed } from '@angular/core/testing';

import { ClientPlatformService } from './client-platform.service';

describe('ClientPlatformService', () => {
  let service: ClientPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
