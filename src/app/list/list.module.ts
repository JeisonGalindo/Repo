import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ListRoutes } from './list.routing';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListRoutes),
    NgbTooltipModule
  ],
  declarations: [ListComponent]
})

export class ListModule { }
