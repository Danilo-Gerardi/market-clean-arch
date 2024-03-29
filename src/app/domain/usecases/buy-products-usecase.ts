import { BuyProductsRepository } from '@adapters/gateways/buy-products.repository';
import { CartStateInterface } from '@domain/cart/cart-state.interface';
import { ProductToBuy } from '../product/product-to-buy.interface';

export class BuyProductsUseCase {
  constructor(
    private readonly repository: BuyProductsRepository,
    private readonly cartStateInterface: CartStateInterface
  ) {}

  async execute(productsToBuy: ProductToBuy[]): Promise<void> {
    const res = await this.repository.buyProducts(productsToBuy);

    if (res.httpStatus === 200) {
      productsToBuy.forEach((p) =>
        this.cartStateInterface.removeItem(p.productId)
      );
    }
  }
}
