import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShareMarketComponent} from "./share-market.component";

const routes: Routes = [
  {
    path: "",
    component: ShareMarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareMarketRoutingModule { }
