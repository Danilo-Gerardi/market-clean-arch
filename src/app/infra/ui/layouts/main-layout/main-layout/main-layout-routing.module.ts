import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('../pages/purchase/purchase.module').then(
            (m) => m.PurchaseModule
          ),
      },
      {
        path: 'purchase-history',
        loadChildren: () =>
          import('../pages/purchase-history/purchase-history.module').then(
            (m) => m.PurchaseHistoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
