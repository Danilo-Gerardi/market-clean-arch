import { Product } from '../product/product.model';

export class Cart {
  private items: Product[] = [];

  constructor() {}

  addItem(productId: string): void {
    this.items.push(productId);
  }

  removeItem(productId: string): void {
    this.items.filter((id) => id !== productId);
  }

  seeItems(): Product[] {
    return this.items;
  }

  emptyCart(): void {}
}
