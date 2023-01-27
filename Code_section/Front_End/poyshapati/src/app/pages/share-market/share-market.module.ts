import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareMarketRoutingModule } from './share-market-routing.module';
import { ShareMarketComponent } from './share-market.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ShareMarketComponent
  ],
    imports: [
        CommonModule,
        ShareMarketRoutingModule,
        SharedModule
    ]
})
export class ShareMarketModule { }
