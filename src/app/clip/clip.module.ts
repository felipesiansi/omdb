import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClipShellComponent } from './clip-shell/clip-shell.component';
import { MovieListSugestionsComponent } from './movies/movie-list-sugestions.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { SerieListEpisodesComponent } from './series/serie-list-episodes.component';
import { SeriesListSugestionComponent } from './series/series-list-sugestion.component';
import { SerieDetailsComponent } from './series/serie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { SharedModule } from '../shared/shared.module';
import { ClipShellListComponent } from './clip-shell/clip-shell-list.component';
import { ClipShellDetailComponent } from './clip-shell/clip-shell-detail.component';
import { MovieService } from './movies/movie.service';
import { SerieService } from './series/serie.service';
import { SeasonService } from './series/season.service';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ClipShellComponent }
    ]),

  ],
  declarations: [
    ClipShellComponent,
    MovieListSugestionsComponent,
    MovieDetailsComponent,
    SerieListEpisodesComponent,
    SeriesListSugestionComponent,
    SerieDetailsComponent,
    MoviesComponent,
    SeriesComponent,
    ClipShellListComponent,
    ClipShellDetailComponent
  ],
  providers: [
    MovieService,
    SerieService,
    SeasonService
  ]
})
export class ClipModule {
  constructor() {

  }
 }
