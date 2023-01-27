import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import {RouterLink} from "@angular/router";
import { TutorialComponent } from './tutorial/tutorial.component';
@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        ButtonComponent,
        TutorialComponent
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        TutorialComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
