import { Component, Input, OnInit } from '@angular/core';
import { Colors } from '@components/cart-icon/cart-icon.component';
import * as CryptoJS from 'crypto-js';
import { ProductModel } from 'src/app/domain/product/product.model';
import { CartState } from 'src/app/infra/global-state/cart/cart-state.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModel;
  encryptedId!: string;

  addedToCart = false;

  cartButtonState!: {
    cssId: string;
    disabled: boolean;
    color: Colors;
  };

  constructor(private cartState: CartState) {}

  ngOnInit(): void {
    this.encryptedId = CryptoJS.AES.encrypt(
      this.product.id,
      'productId'
    ).toString();

    this.setCartButtonState();
  }

  addToCart(product: ProductModel): void {
    this.cartState.cart.addItem(product);
    this.cartState.$cartItems.next(this.cartState.cart.items);

    this.disableCartButton();
  }

  private setCartButtonState(): void {
    if (this.cartState.cart.isItemInTheCart(this.product.id)) {
      this.disableCartButton();
    } else {
      this.cartButtonState = {
        cssId: 'cart-btn',
        disabled: false,
        color: Colors.PURPLE,
      };
    }
  }

  private disableCartButton(): void {
    this.cartButtonState = {
      cssId: 'cart-btn-disabled',
      disabled: true,
      color: Colors.DISABLED,
    };
  }
}
