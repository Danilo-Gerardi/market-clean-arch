import { Cart } from '@domain/cart/cart';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from './../../../domain/product/product.model';

export class CartState {
  public readonly cart = Cart.getInstance();

  $cartItems = new BehaviorSubject<ProductModel[]>(this.cart.items);
}
