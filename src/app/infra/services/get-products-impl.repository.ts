import { HttpClient } from '@angular/common/http';
import { catchError, lastValueFrom, map } from 'rxjs';
import { GetProductsRepository } from 'src/app/adapters/gateways/get-products.repository';
import { ProductModel } from 'src/app/domain/product/product.model';
import { toProductModel } from '../../adapters/mappers/product-mapper';
import { GetProductsService } from '../http-state/products.service';

export class GetProductsRepositoryImpl implements GetProductsRepository {
  constructor(
    private http: HttpClient,
    private productsService: GetProductsService
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
