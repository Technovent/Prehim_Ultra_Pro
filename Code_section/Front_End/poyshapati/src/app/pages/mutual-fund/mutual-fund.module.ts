import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MutualFundRoutingModule } from './mutual-fund-routing.module';
import { MutualFundComponent } from './mutual-fund.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MutualFundComponent
  ],
    imports: [
        CommonModule,
        MutualFundRoutingModule,
        SharedModule
    ]
})
export class MutualFundModule { }
