import { GetProductsRepository } from 'src/app/adapters/gateways/get-products.repository';
import { ProductModel } from '../product/product.model';

export class GetProductsUseCase {
  constructor(private readonly repository: GetProductsRepository) {}

  async execute(): Promise<ProductModel[]> {
    return this.repository.getProducts();
  }
}
