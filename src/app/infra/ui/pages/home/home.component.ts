import { Component, OnInit } from '@angular/core';
import { ProductController } from 'src/app/adapters/controllers/products.controller';
import { ProductModel } from 'src/app/domain/product/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: ProductModel[];

  constructor(private controller: ProductController) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private async getProducts(): Promise<void> {
    this.products = await this.controller.getProducts();
  }
}
