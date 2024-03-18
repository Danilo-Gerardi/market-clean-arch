import { BuyProductRepository } from 'src/app/adapters/gateways/buy-product.repository';

export class BuyProductUseCase {
  constructor(private readonly repository: BuyProductRepository) {}

  async execute(): Promise<void> {
    this.repository.buyProduct();
  }
}
