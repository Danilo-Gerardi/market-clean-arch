import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormatToRealPipe } from 'src/app/infra/pipes/format-to-real.pipe';
import { SharedModule } from 'src/app/infra/ui/shared/shared/shared.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';

@NgModule({
  declarations: [PurchaseComponent, FormatToRealPipe],
  imports: [CommonModule, PurchaseRoutingModule, SharedModule],
})
export class PurchaseModule {}
