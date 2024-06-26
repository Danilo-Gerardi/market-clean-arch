import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetProductsController } from 'src/app/adapters/controllers/get-products.controller';

import { ProductModel } from 'src/app/domain/product/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: ProductModel[];

  constructor(
    private controller: GetProductsController,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      this.products = await this.controller.getProducts();
    } catch (error) {
      console.log('error fetching data');
    }
  }
}
