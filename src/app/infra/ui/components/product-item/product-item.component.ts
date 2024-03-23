import { Component, Input, OnInit } from '@angular/core';
import { Colors } from '@components/cart-icon/cart-icon.component';
import { Cart } from '@domain/cart/cart';
import { ProductModel } from 'src/app/domain/product/product.model';
import { CartState } from 'src/app/infra/global-state/cart/cart-state.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModel;
  cart!: Cart;
  cartIconColor!: Colors;

  constructor(private cartState: CartState) {
    this.cart = cartState.cart;
  }

  ngOnInit(): void {}

  addToCart(product: ProductModel): void {
    this.cart.addItem(product);
    this.cartIconColor = Colors.DISABLED;
  }
}
