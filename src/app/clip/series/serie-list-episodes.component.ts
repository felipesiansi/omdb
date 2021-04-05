import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { ClipService } from '../../shared/clip.service';
import { ISeason } from './season';
import { SeasonService } from './season.service';
import { ISerie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'omdb-serie-list-episodes',
  templateUrl: './serie-list-episodes.component.html',
  styleUrls: ['./serie-list-episodes.component.scss']
})
export class SerieListEpisodesComponent implements OnInit {

  selectedClip!: IClip | null;
  sub: Subscription | undefined;
  seasons: ISeason[] = [];
  errorMessage: string = '';


  constructor(private clipService: ClipService,
              private serieService: SerieService,
              private seasonService: SeasonService) { }

  ngOnInit(): void {


    this.sub = this.clipService.selectedClipChanges$.subscribe(
      (selectedClip) => {
        this.sub =  this.serieService.getSerieByImdbId(selectedClip?.imdbID).subscribe(
          (serie: ISerie) => {
            for (let index = 1; index <= serie.totalSeasons; index++) {
              this.sub =  this.seasonService.getSeasonBySerieImdbId(selectedClip?.imdbID, index).subscribe(
                (season: ISeason) => {

                  this.seasons?.push(season);

                })
            }
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
