import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromCartBtnComponent } from './remove-from-cart-btn.component';

describe('RemoveFromCartBtnComponent', () => {
  let component: RemoveFromCartBtnComponent;
  let fixture: ComponentFixture<RemoveFromCartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFromCartBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFromCartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
