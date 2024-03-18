import { HttpClient } from '@angular/common/http';
import { BuyProductRepository } from '../../adapters/gateways/buy-product.repository';

export class BuyProductRepositoryImpl implements BuyProductRepository {
  constructor(private http: HttpClient) {}

  async buyProduct(): Promise<void> {}
}
