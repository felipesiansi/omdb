import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { MediaParameterService } from './media-parameter.service';
import { MediaService } from './media.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRemoveMyListComponent } from './add-remove-my-list/add-remove-my-list.component';
import { MyListService } from './my-list.service';
import { ClipService } from './clip.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
    StarComponent,
    CriteriaComponent,
    AddRemoveMyListComponent
  ],
  exports: [
    StarComponent,
    CriteriaComponent,
    CommonModule,
    FormsModule,
    AddRemoveMyListComponent
  ],
  providers: [
    MediaService,
    MediaParameterService,
    MyListService,
    ClipService
  ]
})
export class SharedModule {
}
