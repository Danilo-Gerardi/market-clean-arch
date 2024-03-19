import { BuyProductsUseCase } from 'src/app/domain/usecases/buy-products-usecase';
import { PayloadResponse } from '../interfaces/payload-response.interface';
import { ProductToBuy } from './../../domain/product/product-to-buy.interface';

export class BuyProductsController {
  constructor(private useCase: BuyProductsUseCase) {}

  async buyProducts(
    productsToBuy: ProductToBuy[]
  ): Promise<PayloadResponse<void>> {
    return this.useCase.execute(productsToBuy);
  }
}
