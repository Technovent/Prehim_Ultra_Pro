import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateComponent } from './admin-panel/create/create.component';
import { ListComponent } from '../../shared/list/list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { MutualCreateComponent } from './admin-panel/mutual-create/mutual-create.component';


@NgModule({
    declarations: [
        AdminPanelComponent,
        CreateComponent,
        MutualCreateComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        AdminPanelRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AdminPanelModule { }
