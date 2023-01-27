import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import {RouterLink} from "@angular/router";
import { TutorialComponent } from './tutorial/tutorial.component';
import { InvestmentCategoryComponent } from './investment-category/investment-category.component';
import { InputTextComponent } from './input-text/input-text.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ListComponent} from "./list/list.component";
import { MutualListComponent } from './mutual-list/mutual-list.component';
@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        ButtonComponent,
        TutorialComponent,
        InvestmentCategoryComponent,
        InputTextComponent,
        ListComponent,
        MutualListComponent
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        TutorialComponent,
        InputTextComponent,
        ButtonComponent,
        InvestmentCategoryComponent,
        ListComponent,
        MutualListComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
