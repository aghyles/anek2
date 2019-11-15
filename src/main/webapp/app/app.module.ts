import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { T04JhSharedModule } from 'app/shared/shared.module';
import { T04JhCoreModule } from 'app/core/core.module';
import { T04JhAppRoutingModule } from './app-routing.module';
import { T04JhHomeModule } from './home/home.module';
import { T04JhEntityModule } from './entities/entity.module';
import { T04JhNameofpageModule } from 'app/nameofpage/module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SideNavbarComponent } from './layouts/sidenavbar/sidenavbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    T04JhSharedModule,
    T04JhCoreModule,
    T04JhHomeModule,
    T04JhNameofpageModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    T04JhEntityModule,
    T04JhAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent, SideNavbarComponent],
  bootstrap: [JhiMainComponent]
})
export class T04JhAppModule {}
