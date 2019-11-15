import { Route } from '@angular/router';

import { SideNavbarComponent } from './sidenavbar.component';

export const sidenavbarRoute: Route = {
  path: '',
  component: SideNavbarComponent,
  outlet: 'sidenavbar'
};
