import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductController } from '../../adapters/controllers/products.controller';
import { GetProductsUseCase } from '../../domain/usecases/get-products-usecase';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductRepository } from 'src/app/adapters/gateways/get-products.repository';
import { CacheInterceptor } from '../interceptors/cache.interceptor';
import { ProductRepositoryImpl } from '../services/get-products-impl.repository';

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
      provide: ProductController,
      useClass: ProductController,
      deps: [GetProductsUseCase],
    },
    {
      provide: GetProductsUseCase,
      useClass: GetProductsUseCase,
      deps: [ProductRepository],
    },
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
      deps: [HttpClient],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
