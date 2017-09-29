import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { RegistroRoutes } from './registro.routing';
import { RegistroComponent } from './registro.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RegistroRoutes),
        NgbTooltipModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [RegistroComponent]
})

export class RegistroModule { }
