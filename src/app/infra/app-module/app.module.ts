import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductController } from '../../adapters/controllers/products.controller';
import { GetProductsUseCase } from '../../domain/usecases/get-products-usecase';
import { ProductRepositoryImpl } from 'src/app/adapters/gateways/get-products-impl.repository';
import { ProductRepository } from 'src/app/adapters/gateways/get-products.repository';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
