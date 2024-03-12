import { Injectable } from '@angular/core';
import { ProductController } from '../adapters/controllers/products.controller';
import { GetProductsUseCase } from '../domain/usecases/get-products-usecase';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductControllerInstance extends ProductController {
//   constructor() {
//     super(new GetProductsUseCaseInstance());
//   }
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class GetProductsUseCaseInstance extends GetProductsUseCase<any, any> {}
