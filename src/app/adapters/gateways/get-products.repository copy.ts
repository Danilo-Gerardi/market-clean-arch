import { ProductModel } from 'src/app/domain/product/product.model';

export abstract class GetProductsRepository {
  abstract getProducts(): Promise<ProductModel[]>;
}
