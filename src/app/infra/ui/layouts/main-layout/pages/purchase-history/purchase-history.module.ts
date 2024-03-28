import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/infra/ui/shared/shared.module';
import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { PurchaseHistoryComponent } from './purchase-history.component';

@NgModule({
  declarations: [PurchaseHistoryComponent],
  imports: [CommonModule, PurchaseHistoryRoutingModule, SharedModule],
})
export class PurchaseHistoryModule {}
