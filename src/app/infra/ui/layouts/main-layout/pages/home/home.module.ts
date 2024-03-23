import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { ProductItemComponent } from '@components/product-item/product-item.component';

import { CartIconComponent } from '@components/cart-icon/cart-icon.component';
import { SharedModule } from 'src/app/infra/ui/shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ProductItemComponent, CartIconComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
