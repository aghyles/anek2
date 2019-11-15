import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { T04JhSharedModule } from 'app/shared/shared.module';
import { NAMEOFPAGE_ROUTE, NameofpageComponent } from './';


@NgModule({
  imports: [
    T04JhSharedModule,
    RouterModule.forRoot(
      [ NAMEOFPAGE_ROUTE ],
      { useHash: true })
  ],
  declarations: [
    NameofpageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class T04JhNameofpageModule { }
