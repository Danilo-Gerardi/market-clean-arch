import { Component, Input, OnInit } from '@angular/core';
import { Colors } from '@components/cart-icon/cart-icon.component';
import { CartStateInterface } from '@domain/cart/cart-state.interface';
import * as CryptoJS from 'crypto-js';
import { ProductModel } from 'src/app/domain/product/product.model';

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

  constructor(private cartState: CartStateInterface) {}

  ngOnInit(): void {
    this.encryptedId = CryptoJS.AES.encrypt(
      this.product.id,
      'productId'
    ).toString();

    this.setCartButtonState();
  }

  addToCart(product: ProductModel): void {
    this.cartState.addItem(product);
    this.disableCartButton();
  }

  private setCartButtonState(): void {
    if (this.cartState.isItemInTheCart(this.product.id)) {
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
