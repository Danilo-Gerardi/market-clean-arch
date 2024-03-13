import { ProductRepository } from 'src/app/adapters/gateways/get-products.repository';
import { ProductModel } from '../product/product.model';
import { Injectable } from '@angular/core';
import { ProductRepositoryImpl } from 'src/app/adapters/gateways/get-products-impl.repository';

export class GetProductsUseCase {
  constructor(private readonly repository: ProductRepositoryImpl) {}

  async execute(): Promise<ProductModel[]> {
    return this.repository.getProducts();
  }
}
