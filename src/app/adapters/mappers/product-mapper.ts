import { ProductModel } from 'src/app/domain/product/product.model';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../../domain/product/get-products-response.interface';

export function toProductModel(p: Product): ProductModel {
  return {
    id: uuidv4(),
    name: p.name,
    price: p.price,
    image: p.image,
  } as ProductModel;
}
