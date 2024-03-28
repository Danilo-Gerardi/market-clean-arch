import { Component, OnDestroy } from '@angular/core';
import { ProductModel } from '@domain/product/product.model';
import { BehaviorSubject } from 'rxjs';
import { CartState } from './../../../../../global-state/cart/cart-state.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnDestroy {
  cartItems!: BehaviorSubject<ProductModel[]>;

  constructor(private cartState: CartState) {
    this.cartItems = this.cartState.$cartItems;
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}
