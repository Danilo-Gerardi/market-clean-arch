import { ProductRepositoryImpl } from 'src/app/infra/services/get-products-impl.repository';
import { ProductModel } from '../product/product.model';

export class GetProductsUseCase {
  constructor(private readonly repository: ProductRepositoryImpl) {}

  async execute(): Promise<ProductModel[]> {
    return this.repository.getProducts();
  }
}
