import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductController } from '../../adapters/controllers/products.controller';
import { GetProductsUseCase } from '../../domain/usecases/get-products-usecase';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductRepository } from 'src/app/adapters/gateways/get-products.repository';
import { ProductsService } from '../http-state/products.service';
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
      deps: [GetProductsUseCase],
    },
    {
      provide: GetProductsUseCase,
      deps: [ProductRepository],
    },
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
      deps: [HttpClient, ProductsService],
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CacheInterceptor,
    //   multi: true,
    // },
    ProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
