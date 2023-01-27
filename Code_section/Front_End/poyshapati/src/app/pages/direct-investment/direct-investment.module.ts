import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectInvestmentRoutingModule } from './direct-investment-routing.module';
import { DirectInvestmentComponent } from './direct-investment.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DirectInvestmentComponent
  ],
    imports: [
        CommonModule,
        DirectInvestmentRoutingModule,
        SharedModule
    ]
})
export class DirectInvestmentModule { }
