import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { CartStateInterface } from '@domain/cart/cart-state.interface';
import { ProductModel } from '@domain/product/product.model';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs';
import { EmptyCartBtnService } from 'src/app/infra/global-state/empty-cart-btn/empty-cart-btn.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnDestroy, AfterViewInit {
  cartItems!: BehaviorSubject<ProductModel[]>;

  constructor(
    private cartState: CartStateInterface,
    private cdr: ChangeDetectorRef,
    private emptyCartBtnService: EmptyCartBtnService
  ) {
    this.cartItems = this.cartState.getCartItems();
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  removeItem(id: string): void {
    this.cartState.removeItem(id);
  }

  isItemInTheCart(id: string): boolean {
    return this.cartState.isItemInTheCart(id);
  }

  emptyCart(): void {
    this.cartState.emptyCart();
    this.emptyCartBtnService.$emptyCartBtn.next(false);
  }

  encryptId(id: string): string {
    console.log('encrypted');
    return CryptoJS.AES.encrypt(id, 'productId').toString();
  }
}
