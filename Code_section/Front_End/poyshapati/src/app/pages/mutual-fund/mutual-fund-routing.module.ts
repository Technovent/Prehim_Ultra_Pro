import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MutualFundComponent} from "./mutual-fund.component";

const routes: Routes = [
  {
    path: "",
    component: MutualFundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualFundRoutingModule { }
