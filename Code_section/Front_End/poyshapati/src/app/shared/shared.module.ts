import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import {RouterLink} from "@angular/router";
@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        ButtonComponent
    ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
