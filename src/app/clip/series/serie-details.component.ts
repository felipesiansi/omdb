import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClipService } from '../../shared/clip.service';
import { ISerie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'omdb-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent implements OnInit, OnDestroy {

  selectedSerie!: ISerie;
  sub: Subscription | undefined;
  errorMessage!: string;

  constructor(private clipService: ClipService,
              private serieService: SerieService) { }

  ngOnInit(): void {

    this.sub = this.clipService.selectedClipChanges$.subscribe(
      (selectedClip) => {
        this.sub =  this.serieService.getSerieByImdbId(selectedClip?.imdbID).subscribe(
          (serie: ISerie) => {
            this.selectedSerie = serie;
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
