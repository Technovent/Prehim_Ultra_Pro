import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import('./pages/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: "admin",
    loadChildren: ()=> import('./pages/admin-panel/admin-panel.module').then(m=>m.AdminPanelModule)
  },
  {
    path: "direct-invest",
    loadChildren: ()=> import('./pages/direct-investment/direct-investment.module').then(m=> m.DirectInvestmentModule)
  },
  {
    path: "share-market",
    loadChildren:()=> import('./pages/share-market/share-market.module').then(m=>m.ShareMarketModule)
  },
  {
    path:"mutual-fund",
    loadChildren: ()=> import('./pages/mutual-fund/mutual-fund.module').then(m=> m.MutualFundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
