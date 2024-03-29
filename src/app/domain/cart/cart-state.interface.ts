import { ProductModel } from '@domain/product/product.model';
import { BehaviorSubject } from 'rxjs';

export abstract class CartStateInterface {
  abstract getCartItems(): BehaviorSubject<ProductModel[]>;

  abstract addItem(product: ProductModel): void;

  abstract removeItem(id: string): void;

  abstract isItemInTheCart(id: string): boolean;
}
