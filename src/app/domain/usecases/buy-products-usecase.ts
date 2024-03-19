import { BuyProductsRepository } from 'src/app/adapters/gateways/buy-products.repository';
import { PayloadResponse } from 'src/app/adapters/interfaces/payload-response.interface';
import { ProductToBuy } from '../product/product-to-buy.interface';

export class BuyProductsUseCase {
  constructor(private readonly repository: BuyProductsRepository) {}

  async execute(productsToBuy: ProductToBuy[]): Promise<PayloadResponse<void>> {
    return this.repository.buyProducts(productsToBuy);
  }
}
