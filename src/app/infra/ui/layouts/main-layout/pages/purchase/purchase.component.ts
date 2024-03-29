import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ProductToBuy } from '@domain/product/product-to-buy.interface';
import * as CryptoJS from 'crypto-js';
import { BuyProductsController } from 'src/app/adapters/controllers/buy-products.controller';
import { GetProductsController } from 'src/app/adapters/controllers/get-products.controller';

import { ProductModel } from 'src/app/domain/product/product.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  product!: ProductModel;
  spinner = false;
  isProductBought = false;

  constructor(
    private controller: GetProductsController,
    private buyProductsController: BuyProductsController,
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
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

  async buyProduct(): Promise<void> {
    this.spinner = true;

    try {
      await this.buyProductsController.buyProducts([
        {
          productId: 1,
          quantity: 1,
        },
      ] as ProductToBuy[]);

      this.isProductBought = true;
    } catch (error) {
      console.log('error buying product');
    } finally {
      this.spinner = false;
    }
  }

  private getProductIdFromUrl(): string {
    let id = '';

    this.activatedRoute.url.subscribe(
      (data: UrlSegment[]) => (id = data[1].path)
    );

    return CryptoJS.AES.decrypt(id, 'productId').toString(CryptoJS.enc.Utf8);
  }
}
