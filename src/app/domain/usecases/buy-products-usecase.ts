import { BuyProductsRepository } from '@adapters/gateways/buy-products.repository';
import { PayloadResponse } from '@adapters/interfaces/payload-response.interface';
import { ProductToBuy } from '../product/product-to-buy.interface';

export class BuyProductsUseCase {
  constructor(private readonly repository: BuyProductsRepository) {}

  async execute(productsToBuy: ProductToBuy[]): Promise<PayloadResponse<void>> {
    return this.repository.buyProducts(productsToBuy);
  }
}
