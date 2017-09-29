import { Routes } from '@angular/router';

import { RegistroComponent } from './registro.component';

export const RegistroRoutes: Routes = [{
    path: '',
    component: RegistroComponent,
    data: {
        heading: 'Registro'
    }
}];
