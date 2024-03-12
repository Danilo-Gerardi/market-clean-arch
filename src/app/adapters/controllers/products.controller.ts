import { GetProductsUseCase } from 'src/app/domain/usecases/get-products-usecase';

export class ProductController {
  constructor(private useCase: GetProductsUseCase<any, any>) {}

  execute(params?: any): Promise<any> {
    return this.useCase.execute(params);
  }
}
