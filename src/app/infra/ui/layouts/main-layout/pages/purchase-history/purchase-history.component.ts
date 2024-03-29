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

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnDestroy, AfterViewInit {
  cartItems!: BehaviorSubject<ProductModel[]>;

  constructor(
    private cartState: CartStateInterface,
    private cdr: ChangeDetectorRef
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

  encryptId(id: string): string {
    console.log('encrypted');
    return CryptoJS.AES.encrypt(id, 'productId').toString();
  }
}
