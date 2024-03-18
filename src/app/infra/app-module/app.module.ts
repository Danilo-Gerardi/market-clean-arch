import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BuyProductController } from 'src/app/adapters/controllers/buy-product.controller';
import { GetProductsController } from 'src/app/adapters/controllers/get-products.controller copy';
import { BuyProductRepository } from 'src/app/adapters/gateways/buy-product.repository';
import { GetProductsRepository } from 'src/app/adapters/gateways/get-products.repository copy';
import { BuyProductUseCase } from 'src/app/domain/usecases/buy-product-usecase';
import { GetProductsUseCase } from 'src/app/domain/usecases/get-products-usecase copy';
import { GetProductsService } from '../http-state/products.service';
import { BuyProductRepositoryImpl } from '../services/buy-product-impl.repository';
import { GetProductsRepositoryImpl } from '../services/get-products-impl.repository copy';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: GetProductsController,
      deps: [GetProductsUseCase],
    },
    {
      provide: GetProductsUseCase,
      deps: [GetProductsRepository],
    },
    {
      provide: GetProductsRepository,
      useClass: GetProductsRepositoryImpl,
      deps: [HttpClient, GetProductsService],
    },
    {
      provide: BuyProductController,
      deps: [BuyProductUseCase],
    },
    {
      provide: BuyProductUseCase,
      deps: [BuyProductRepository],
    },
    {
      provide: BuyProductRepository,
      useClass: BuyProductRepositoryImpl,
      deps: [HttpClient, GetProductsService],
    },
    GetProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
