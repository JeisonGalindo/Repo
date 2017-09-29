import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'list',
      loadChildren: './list/list.module#ListModule'
    },
    {
      path: 'registro',
      loadChildren: './registro/registro.module#RegistroModule'
    },
    {
      path: 'inises',
      loadChildren: './inises/inises.module#InisesModule'
    }]
  }
];
