import { Routes } from '@angular/router';

import { InisesComponent } from './inises.component';

export const InisesRoutes: Routes = [{
    path: '',
    component: InisesComponent,
    data: {
        heading: 'Inicio de sesión'
    }
}];
