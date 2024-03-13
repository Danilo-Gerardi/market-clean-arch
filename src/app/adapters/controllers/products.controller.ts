import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/domain/product/product.model';
import { GetProductsUseCase } from 'src/app/domain/usecases/get-products-usecase';

export class ProductController {
  constructor(private useCase: GetProductsUseCase) {}

  async getProducts(): Promise<ProductModel[]> {
    return this.useCase.execute();
  }
}
