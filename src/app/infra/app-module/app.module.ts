import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GetProductsController } from 'src/app/adapters/controllers/get-products.controller copy';

import { GetProductsRepository } from 'src/app/adapters/gateways/get-products.repository copy';

import { GetProductsUseCase } from 'src/app/domain/usecases/get-products-usecase copy';
import { GetProductsService } from '../http-state/products.service';

import { BuyProductsUseCase } from 'src/app/domain/usecases/buy-products-usecase';
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
      provide: GetProductsController,
      deps: [BuyProductsUseCase],
    },
    {
      provide: BuyProductsUseCase,
      deps: [GetProductsRepository],
    },
    {
      provide: GetProductsRepository,
      useClass: GetProductsRepositoryImpl,
      deps: [HttpClient, GetProductsService],
    },
    GetProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
