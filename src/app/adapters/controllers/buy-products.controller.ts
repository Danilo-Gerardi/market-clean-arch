import { ProductToBuy } from '@domain/product/product-to-buy.interface';
import { BuyProductsUseCase } from '@domain/usecases/buy-products-usecase';

export class BuyProductsController {
  constructor(private useCase: BuyProductsUseCase) {}

  async buyProducts(productsToBuy: ProductToBuy[]): Promise<void> {
    return this.useCase.execute(productsToBuy);
  }
}
