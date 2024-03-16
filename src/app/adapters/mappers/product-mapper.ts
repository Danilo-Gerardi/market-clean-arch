import { ProductModel } from 'src/app/domain/product/product.model';
import { Product } from '../interfaces/products-response';

export function toProductModel(p: Product): ProductModel {
  return {
    id: '1',
    name: p.name,
    price: p.price,
    image: p.image,
  } as ProductModel;
}
