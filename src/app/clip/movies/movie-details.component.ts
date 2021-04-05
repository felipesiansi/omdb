import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { ClipService } from '../../shared/clip.service';
import { ClipTypeEnum } from '../cliptype.enum';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'omdb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  selectedMovie!: IMovie;
  sub: Subscription | undefined;
  errorMessage!: string;

  constructor(private clipService: ClipService,
              private movieService: MovieService) { }

  ngOnInit(): void {

    this.sub = this.clipService.selectedClipChanges$.subscribe(
      (selectedClip) => {
        this.sub =  this.movieService.getMovieByImdbId(selectedClip?.imdbID).subscribe(
          (movie: IMovie) => {
            this.selectedMovie = movie;
          },
          (error: any) => (this.errorMessage = <any>error)
        );

      }
    );


  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


}
