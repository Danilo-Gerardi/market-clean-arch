import { HttpClient } from '@angular/common/http';
import { delay, lastValueFrom, of } from 'rxjs';
import { PayloadResponse } from 'src/app/adapters/interfaces/payload-response.interface';
import { ProductToBuy } from 'src/app/domain/product/product-to-buy.interface';
import { BuyProductsRepository } from '../../adapters/gateways/buy-products.repository';

export class BuyProductsRepositoryImpl implements BuyProductsRepository {
  statusCode = 200;

  constructor(private http: HttpClient) {}

  async buyProducts(
    productsToBuy: ProductToBuy[]
  ): Promise<PayloadResponse<void>> {
    if (productsToBuy && productsToBuy.length > 0 && this.statusCode === 200) {
      console.log('aqui');
      return lastValueFrom(
        of({
          message: 'Products bought successfully',
          httpStatus: 200,
        }).pipe(delay(1400))
      );
    }

    return lastValueFrom(
      of({
        httpStatus: 500,
        message: 'Internal server error',
      }).pipe(delay(1400))
    );
  }
}
