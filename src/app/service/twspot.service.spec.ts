import { TestBed, inject } from '@angular/core/testing';

import { TWSpotService } from './twspot.service';

describe('TwspotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TWSpotService]
    });
  });

  it('should be created', inject([TWSpotService], (service: TWSpotService) => {
    expect(service).toBeTruthy();
  }));
});
