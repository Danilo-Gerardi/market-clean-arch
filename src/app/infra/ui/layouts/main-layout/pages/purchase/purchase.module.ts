import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/infra/ui/shared/shared/shared.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';

@NgModule({
  declarations: [PurchaseComponent],
  imports: [CommonModule, PurchaseRoutingModule, SharedModule],
})
export class PurchaseModule {}
