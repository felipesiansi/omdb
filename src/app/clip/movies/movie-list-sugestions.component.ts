import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { IMedia } from 'src/app/shared/media';
import { MediaService } from 'src/app/shared/media.service';

@Component({
  selector: 'omdb-movie-list-sugestions',
  templateUrl: './movie-list-sugestions.component.html',
  styleUrls: ['./movie-list-sugestions.component.scss']
})
export class MovieListSugestionsComponent implements OnInit, OnDestroy {

  selectedClip!: IClip | null;
  selectedMedias!: IMedia;
  sub!: Subscription;
  errorMessage!: string;
  imageWidth: number = 80;

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {

    this.sub = this.mediaService.selectedMediaChanges$.subscribe(
      (selectedMedia) => {
        if(selectedMedia!.totalResults){

          const pageNumber = selectedMedia!.totalResults >  10 ? 2 : 1;
          this.sub =  this.mediaService.getMediasByTitleAndPage(pageNumber).subscribe(
            (media: IMedia) => {
              this.selectedMedias = media;
            },
            (error: any) => (this.errorMessage = <any>error)
          );

        }


      }
    );


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
