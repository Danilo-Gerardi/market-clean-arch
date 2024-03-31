import { BuyProductsRepository } from '@adapters/gateways/buy-products.repository';
import { PayloadResponse } from '@adapters/interfaces/payload-response.interface';
import { CartStateInterface } from '@domain/cart/cart-state.interface';
import { ProductToBuy } from '../product/product-to-buy.interface';

export class BuyProductsUseCase {
  constructor(
    private readonly repository: BuyProductsRepository,
    private readonly cartStateInterface: CartStateInterface
  ) {}

  async execute(productsToBuy: ProductToBuy[]): Promise<PayloadResponse<void>> {
    const res = await this.repository.buyProducts(productsToBuy);
    console.log(res);
    if (res.httpStatus === 200) {
      productsToBuy.forEach((p) =>
        this.cartStateInterface.removeItem(p.productId)
      );
    }

    return res;
  }
}
