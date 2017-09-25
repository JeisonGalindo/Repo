import { Routes } from '@angular/router';

import { ListComponent } from './list.component';

export const ListRoutes: Routes = [{
  path: '',
  component: ListComponent,
  data: {
    heading: 'List'
  }
}];
