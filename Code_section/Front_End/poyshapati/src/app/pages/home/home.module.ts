import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutAgencyComponent } from './components/about-agency/about-agency.component';
import {SharedModule} from "../../shared/shared.module";
import { BlogComponent } from './components/blog/blog.component';
import { MostProfitableComanyComponent } from './components/most-profitable-comany/most-profitable-comany.component';
import { BlogCardComponent } from './components/blog/blog-card/blog-card.component';
import { CompanyCardComponent } from './components/most-profitable-comany/company-card/company-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutAgencyComponent,
    BlogComponent,
    MostProfitableComanyComponent,
    BlogCardComponent,
    CompanyCardComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
