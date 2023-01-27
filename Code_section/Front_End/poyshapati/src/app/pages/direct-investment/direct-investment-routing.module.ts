import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectInvestmentComponent} from "./direct-investment.component";

const routes: Routes = [
  {
    path: "",
    component: DirectInvestmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectInvestmentRoutingModule { }
