import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { JhiMainComponent } from 'app/layouts/main/main.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];
const routes: Routes = [{ path: '', component: JhiMainComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          data: {
            authorities: ['ROLE_ADMIN']
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.T04JhAccountModule)
        },
        ...LAYOUT_ROUTES,
        ...routes
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],

  exports: [RouterModule]
})
export class T04JhAppRoutingModule {}
