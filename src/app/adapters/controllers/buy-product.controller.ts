import { BuyProductUseCase } from 'src/app/domain/usecases/buy-product-usecase';

export class BuyProductController {
  constructor(private useCase: BuyProductUseCase) {}

  async getProducts(): Promise<void> {
    return this.useCase.execute();
  }
}
