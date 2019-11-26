import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { T04JhSharedModule } from 'app/shared/shared.module';
import { T04JhCoreModule } from 'app/core/core.module';
import { T04JhAppRoutingModule } from './app-routing.module';
import { T04JhHomeModule } from './home/home.module';
import { T04JhEntityModule } from './entities/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { T04JhDashboardModule } from 'app/Pages/dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    T04JhSharedModule,
    T04JhCoreModule,
    T04JhHomeModule,
    T04JhDashboardModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    T04JhEntityModule,
    T04JhAppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule
  ],
  declarations: [
    JhiMainComponent,
    NavbarComponent,
    SidenavComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent
  ],
  bootstrap: [JhiMainComponent]
})
export class T04JhAppModule {}
