import { HttpClient } from '@angular/common/http';
import { catchError, lastValueFrom, map } from 'rxjs';
import { ProductModel } from 'src/app/domain/product/product.model';
import { ProductRepository } from '../../adapters/gateways/get-products.repository';
import { toProductModel } from '../../adapters/mappers/product-mapper';
import { ProductsService } from '../http-state/products.service';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) {}

  async getProducts(): Promise<ProductModel[]> {
    const products = this.productsService.products$.value;

    if (products && products.length !== 0) {
      return products;
    }

    return lastValueFrom(
      this.http.get<any>('../../../assets/mock-api.json').pipe(
        map((data: any) => {
          const d = data.products.map((data: any) => toProductModel(data));

          if (d && d.length !== 0) {
            this.productsService.products$.next(d);
          }

          return d;
        }),
        catchError((err) => {
          console.log(err);
          throw new Error('Error returning data!');
        })
      )
    );
  }
}
