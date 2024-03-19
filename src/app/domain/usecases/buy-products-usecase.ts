import { BuyProductsRepository } from 'src/app/adapters/gateways/buy-products.repository';

export class BuyProductsUseCase {
  constructor(private readonly repository: BuyProductsRepository) {}

  async execute(productIds: string[]): Promise<void> {
    this.repository.buyProduct(productIds);
  }
}
