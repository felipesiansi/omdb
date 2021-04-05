import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { CriteriaComponent } from 'src/app/shared/criteria/criteria.component';
import { IMedia } from 'src/app/shared/media';
import { MediaParameterService } from 'src/app/shared/media-parameter.service';
import { MediaService } from 'src/app/shared/media.service';
import { ClipService } from '../../shared/clip.service';

@Component({
  selector: 'omdb-clip-shell-list',
  templateUrl: './clip-shell-list.component.html',
  styleUrls: ['./clip-shell-list.component.scss']
})
export class ClipShellListComponent implements OnInit , OnDestroy, AfterViewInit{
  errorMessage: string = '';
  selectedClip!: IClip | null;
  sub!: Subscription;
  includeDetail!: boolean;

  filteredClips: IClip[] | undefined;
  medias!: IMedia | null;
  @ViewChild(CriteriaComponent) filterComponent!: CriteriaComponent;

  constructor(
    private mediaService: MediaService,
    private mediaParameterService: MediaParameterService,
    private clipService: ClipService
  ) { }

  ngOnInit(): void {
    this.clipService.selectedClipChanges$.subscribe(

      clip => this.selectedClip = clip

    );

    this.mediaService.selectedMediaChanges$.subscribe(

      media => this.medias = media

    );
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      if(this.mediaParameterService.filterBy) {
        this.onValueChanges(this.mediaParameterService.filterBy);
      }
    }, 0)

  }


  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.mediaParameterService.filterBy = filterBy;
      this.sub =  this.mediaService.getMedias(filterBy).subscribe(
        (medias: IMedia) => {
          this.medias = medias;
          this.mediaService.changeSelectedMedia(this.medias);
          this.filterComponent!.listFilter = this.mediaParameterService.filterBy

          this.filteredClips = this.medias?.Search;
          this.errorMessage = '';
          if(this.filteredClips){

            if(this.mediaParameterService.selectedClip ){

              const selected = this.filteredClips.find(f => f.imdbID == this.mediaParameterService.selectedClip?.imdbID);
              if(selected)
                this.onSelected(this.mediaParameterService.selectedClip);
              else
                this.onSelected(this.filteredClips[0]);
            } else
            this.onSelected(this.filteredClips[0]);
          } else {
            this.clipService.changeSelectedClip(null);
            this.mediaService.changeSelectedMedia(null);
          }


        },
        (error: any) => (this.errorMessage = <any>error)
      );

    } else {
      this.filteredClips = this.medias?.Search;
    }
  }

  onValueChanges(value: string) {
    this.mediaParameterService.filterBy = value;
    this.performFilter(value);
  }

  onSelected(clip: IClip) : void {
    this.clipService.changeSelectedClip(clip);
    this.mediaParameterService.selectedClip = clip;
   }

   ngOnDestroy(): void {
    this.sub?.unsubscribe();
   }

}
