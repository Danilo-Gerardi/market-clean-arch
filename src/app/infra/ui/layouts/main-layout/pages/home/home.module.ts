import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ProductItemComponent } from '../../../../components/product-item/product-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormatToRealPipe } from 'src/app/infra/pipes/format-to-real.pipe';
import { SharedModule } from '../../../../shared/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    FormatToRealPipe,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
