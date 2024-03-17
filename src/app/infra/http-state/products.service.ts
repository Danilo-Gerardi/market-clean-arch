import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/domain/product/product.model';

export class ProductsService {
  products$ = new BehaviorSubject<ProductModel[]>([]);
}
