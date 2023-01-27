import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MutualFundRoutingModule } from './mutual-fund-routing.module';
import { MutualFundComponent } from './mutual-fund.component';


@NgModule({
  declarations: [
    MutualFundComponent
  ],
  imports: [
    CommonModule,
    MutualFundRoutingModule
  ]
})
export class MutualFundModule { }
