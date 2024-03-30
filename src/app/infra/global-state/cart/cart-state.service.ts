import { Cart } from '@domain/cart/cart';
import { CartStateInterface } from '@domain/cart/cart-state.interface';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from './../../../domain/product/product.model';

export class CartState implements CartStateInterface {
  public readonly cart = Cart.getInstance();

  $cartItems = new BehaviorSubject<ProductModel[]>(this.cart.items);

  getCartItems() {
    return this.$cartItems;
  }

  addItem(product: ProductModel) {
    this.cart.addItem(product);
    this.updateCart();
  }

  removeItem(id: string): void {
    this.cart.removeItem(id);
    this.updateCart();
  }

  isItemInTheCart(id: string): boolean {
    return this.cart.isItemInTheCart(id);
  }

  private updateCart() {
    this.$cartItems.next(this.cart.items);
  }
}
