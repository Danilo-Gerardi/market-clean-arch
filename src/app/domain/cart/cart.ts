import { ProductModel } from '../product/product.model';

export class Cart {
  private items: ProductModel[] = [];
  private static instance: Cart;

  private constructor() {}

  static getInstance() {
    return this.instance ?? new Cart();
  }

  addItem(product: ProductModel): void {
    if (!this.isItemInTheCart(product.id)) {
      this.items.push(product);
    }
  }

  removeItem(productId: string): void {
    if (this.isItemInTheCart(productId)) {
      this.items.filter((product) => product.id !== productId);
    }
  }

  seeItems(): ProductModel[] {
    return this.items;
  }

  buyProducts(): void {} //usecase

  persistCartState(): void {} //usecase

  resetCartState(): void {} //usecase

  emptyCart(): void {}

  isItemInTheCart(productId: string): boolean {
    return this.items.some((p) => p.id === productId);
  }
}
