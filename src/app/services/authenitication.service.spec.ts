import { TestBed } from '@angular/core/testing';

import { AutheniticationService } from './authenitication.service';

describe('AutheniticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutheniticationService = TestBed.get(AutheniticationService);
    expect(service).toBeTruthy();
  });
});
