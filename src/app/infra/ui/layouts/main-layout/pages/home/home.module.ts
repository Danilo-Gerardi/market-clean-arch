import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from '../../../../components/product-item/product-item.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../../../../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ProductItemComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
