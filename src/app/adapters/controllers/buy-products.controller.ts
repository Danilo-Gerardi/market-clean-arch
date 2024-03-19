import { BuyProductsUseCase } from 'src/app/domain/usecases/buy-products-usecase';

export class BuyProductsController {
  constructor(private useCase: BuyProductsUseCase) {}

  async getProducts(): Promise<void> {
    return this.useCase.execute();
  }
}
