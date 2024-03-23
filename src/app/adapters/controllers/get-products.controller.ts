import { ProductModel } from '@domain/product/product.model';
import { GetProductsUseCase } from '@domain/usecases/get-products-usecase';

export class GetProductsController {
  constructor(private useCase: GetProductsUseCase) {}

  async getProducts(): Promise<ProductModel[]> {
    return this.useCase.execute();
  }
}
