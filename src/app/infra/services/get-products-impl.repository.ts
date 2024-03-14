import { HttpClient } from '@angular/common/http';
import { catchError, lastValueFrom, map } from 'rxjs';
import { toProductModel } from '../../adapters/mappers/product-mapper';
import { ProductModel } from 'src/app/domain/product/product.model';
import { ProductRepository } from '../../adapters/gateways/get-products.repository';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private http: HttpClient) {}

  async getProducts(): Promise<ProductModel[]> {
    return lastValueFrom(
      this.http.get<any>('../../../assets/mock-api.json').pipe(
        map((data: any) =>
          data.products.map((data: any) => toProductModel(data))
        ),
        catchError((err) => {
          console.log(err);
          throw new Error('Error returning data!');
        })
      )
    );
  }
}
