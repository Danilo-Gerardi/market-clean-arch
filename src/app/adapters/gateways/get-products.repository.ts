import { ProductModel } from 'src/app/domain/product/product.model';

export abstract class ProductRepository {
  abstract getProducts(): Promise<ProductModel[]>;
}
