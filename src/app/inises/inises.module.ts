import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { InisesRoutes } from './inises.routing';
import { InisesComponent } from './inises.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(InisesRoutes),
        NgbTooltipModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [InisesComponent]
})

export class InisesModule { }
