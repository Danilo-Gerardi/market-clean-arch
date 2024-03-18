import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { GetProductsController } from 'src/app/adapters/controllers/get-products.controller copy';

import { ProductModel } from 'src/app/domain/product/product.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  product!: ProductModel;

  constructor(
    private controller: GetProductsController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      const products = await this.controller.getProducts();

      this.product =
        products.find(
          (d: ProductModel) => d.id === this.getProductIdFromUrl()
        ) ?? ({} as ProductModel);

      if (Object.keys(this.product).length === 0) {
        throw new Error('Product not found');
      }
    } catch (error) {
      console.log('error fetching data');
    }
  }

  private getProductIdFromUrl(): string {
    let id = '';

    this.activatedRoute.url.subscribe(
      (data: UrlSegment[]) => (id = data[1].path)
    );

    return id;
  }
}
