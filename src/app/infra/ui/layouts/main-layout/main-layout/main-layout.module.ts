import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartIconComponent } from '@components/cart-icon/cart-icon.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';

import { SharedModule } from 'src/app/infra/ui/shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CartIconComponent,
  ],
  imports: [CommonModule, MainLayoutRoutingModule, SharedModule],
})
export class MainLayoutModule {}
