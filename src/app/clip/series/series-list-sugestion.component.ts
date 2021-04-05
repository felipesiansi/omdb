import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { IMedia } from 'src/app/shared/media';
import { MediaService } from 'src/app/shared/media.service';

@Component({
  selector: 'omdb-series-list-sugestion',
  templateUrl: './series-list-sugestion.component.html',
  styleUrls: ['./series-list-sugestion.component.scss']
})
export class SeriesListSugestionComponent implements OnInit {

  selectedClip!: IClip | null;
  selectedMedias!: IMedia;
  sub!: Subscription;
  errorMessage!: string;
  imageWidth: number = 100;

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
