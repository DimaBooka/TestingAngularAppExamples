import { TestBed, inject } from '@angular/core/testing';

import { HappyService } from './happy.service';
import { HttpModule } from '@angular/http';

describe('Happy.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [HappyService]
    });
  });

  it('should be created', inject([HappyService], (service: HappyService) => {
    expect(service).toBeTruthy();
  }));
});
