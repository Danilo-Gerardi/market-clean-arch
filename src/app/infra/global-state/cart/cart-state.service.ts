import { Cart } from '@domain/cart/cart';

export class CartState {
  public readonly cart = Cart.getInstance();

  //private $cart = new BehaviorSubject<Cart>(Cart.getInstance());
}
