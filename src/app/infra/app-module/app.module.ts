import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartStateInterface } from './../../domain/cart/cart-state.interface';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GetProductsService } from '../http-state/products.service';

import { BuyProductsController } from 'src/app/adapters/controllers/buy-products.controller';
import { GetProductsController } from 'src/app/adapters/controllers/get-products.controller';
import { BuyProductsRepository } from 'src/app/adapters/gateways/buy-products.repository';
import { GetProductsRepository } from 'src/app/adapters/gateways/get-products.repository';
import { BuyProductsUseCase } from 'src/app/domain/usecases/buy-products-usecase';
import { GetProductsUseCase } from 'src/app/domain/usecases/get-products-usecase';
import { CartState } from '../global-state/cart/cart-state.service';
import { BuyProductsRepositoryImpl } from '../services/buy-products-impl.repository';
import { GetProductsRepositoryImpl } from '../services/get-products-impl.repository';

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
      provide: BuyProductsController,
      deps: [BuyProductsUseCase],
    },
    {
      provide: BuyProductsUseCase,
      deps: [BuyProductsRepository, CartStateInterface],
    },
    {
      provide: BuyProductsRepository,
      useClass: BuyProductsRepositoryImpl,
      deps: [HttpClient],
    },
    {
      provide: CartStateInterface,
      useClass: CartState,
    },
    GetProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
