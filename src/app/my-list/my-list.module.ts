import { NgModule } from '@angular/core';
import { MyListComponent } from './my-list.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MyListParameterService } from './my-list-parameter.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: MyListComponent }
    ])
  ],
  declarations: [
    MyListComponent

  ],
  providers: [
    MyListParameterService

  ],
  exports : [
  ]
})
export class MyListModule { }
