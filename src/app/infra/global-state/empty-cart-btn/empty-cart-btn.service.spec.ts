import { TestBed } from '@angular/core/testing';

import { EmptyCartBtnService } from './empty-cart-btn.service';

describe('EmptyCartBtnService', () => {
  let service: EmptyCartBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptyCartBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
