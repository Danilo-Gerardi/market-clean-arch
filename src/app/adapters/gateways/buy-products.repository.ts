export abstract class BuyProductsRepository {
  abstract buyProduct(productIds: string[]): Promise<void>;
}
