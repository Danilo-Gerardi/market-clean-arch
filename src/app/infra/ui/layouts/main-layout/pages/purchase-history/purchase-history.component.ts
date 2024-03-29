import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { ProductModel } from '@domain/product/product.model';
import { BehaviorSubject } from 'rxjs';
import { CartState } from './../../../../../global-state/cart/cart-state.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnDestroy, AfterViewInit {
  cartItems!: BehaviorSubject<ProductModel[]>;

  constructor(private cartState: CartState, private cdr: ChangeDetectorRef) {
    this.cartItems = this.cartState.$cartItems;
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
}
