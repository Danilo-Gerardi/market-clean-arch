import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/infra/ui/shared/shared.module';
import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { PurchaseHistoryComponent } from './purchase-history.component';
import { RemoveFromCartBtnComponent } from './remove-from-cart-btn/remove-from-cart-btn.component';

@NgModule({
  declarations: [PurchaseHistoryComponent, RemoveFromCartBtnComponent],
  imports: [CommonModule, PurchaseHistoryRoutingModule, SharedModule],
})
export class PurchaseHistoryModule {}
