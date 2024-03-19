import { ProductToBuy } from 'src/app/domain/product/product-to-buy.interface';
import { PayloadResponse } from '../interfaces/payload-response.interface';

export abstract class BuyProductsRepository {
  abstract buyProducts(
    productsToBuy: ProductToBuy[]
  ): Promise<PayloadResponse<void>>;
}
