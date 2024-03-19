import { HttpClient } from '@angular/common/http';
import { BuyProductsRepository } from '../../adapters/gateways/buy-products.repository';

export class BuyProductsRepositoryImpl implements BuyProductsRepository {
  constructor(private http: HttpClient) {}

  async buyProduct(productIds: string[]): Promise<void> {}
}
