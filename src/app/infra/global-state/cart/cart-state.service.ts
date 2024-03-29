import { Cart } from '@domain/cart/cart';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from './../../../domain/product/product.model';

export class CartState {
  public readonly cart = Cart.getInstance();

  $cartItems = new BehaviorSubject<ProductModel[]>(this.cart.items);

  addItem(product: ProductModel) {
    this.cart.addItem(product);
    this.nxt();
  }

  removeItem(id: string) {
    this.cart.removeItem(id);
    this.nxt();
  }

  isItemInTheCart(id: string): boolean {
    return this.cart.isItemInTheCart(id);
  }

  private nxt() {
    this.$cartItems.next(this.cart.items);
  }
}
