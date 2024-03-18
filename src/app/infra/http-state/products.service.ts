import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/domain/product/product.model';

export class GetProductsService {
  products$ = new BehaviorSubject<ProductModel[]>([]);
}
