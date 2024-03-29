import { Product } from '@domain/product/get-products-response.interface';
import { ProductModel } from 'src/app/domain/product/product.model';

export function toProductModel(p: Product): ProductModel {
  return new ProductModel(p.id.toString(), p.name, p.price, p.image);
}
