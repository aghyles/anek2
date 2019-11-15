import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { NameofpageComponent } from './component';

export const NAMEOFPAGE_ROUTE: Route = {
  path: 'nameofpage',
  component: NameofpageComponent,
  data: {
    authorities: [],
    pageTitle: 'nameofpage.page.title'
  },
  canActivate: [UserRouteAccessService]
};
