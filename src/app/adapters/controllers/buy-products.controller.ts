import { ProductToBuy } from '@domain/product/product-to-buy.interface';
import { BuyProductsUseCase } from '@domain/usecases/buy-products-usecase';
import { PayloadResponse } from '../interfaces/payload-response.interface';

export class BuyProductsController {
  constructor(private useCase: BuyProductsUseCase) {}

  async buyProducts(
    productsToBuy: ProductToBuy[]
  ): Promise<PayloadResponse<void>> {
    return this.useCase.execute(productsToBuy);
  }
}
