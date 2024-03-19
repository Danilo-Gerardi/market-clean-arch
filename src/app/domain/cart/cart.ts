import { ProductModel } from '../product/product.model';

export class Cart {
  private items: ProductModel[] = [];

  constructor() {}

  addItem(product: ProductModel): void {
    this.items.push(product);
  }

  removeItem(productId: string): void {
    this.items.filter((product) => product.id !== productId);
  }

  seeItems(): ProductModel[] {
    return this.items;
  }

  buyProducts(): void {} //usecase

  persistCartState(): void {} //usecase

  resetCartState(): void {} //usecase

  emptyCart(): void {}
}
