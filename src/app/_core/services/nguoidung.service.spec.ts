import { TestBed } from '@angular/core/testing';

import { NguoidungService } from './nguoidung.service';

describe('NguoidungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguoidungService = TestBed.get(NguoidungService);
    expect(service).toBeTruthy();
  });
});
