import { TestBed } from '@angular/core/testing';

import { LoginBaoveService } from './login-baove.service';

describe('LoginBaoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginBaoveService = TestBed.get(LoginBaoveService);
    expect(service).toBeTruthy();
  });
});
