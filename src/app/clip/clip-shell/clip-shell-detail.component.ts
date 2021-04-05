import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { ClipService } from '../../shared/clip.service';
import { ClipTypeEnum } from '../cliptype.enum';

@Component({
  selector: 'omdb-clip-shell-detail',
  templateUrl: './clip-shell-detail.component.html',
  styleUrls: ['./clip-shell-detail.component.scss']
})
export class ClipShellDetailComponent implements OnInit , OnDestroy{
  selectedClip!: IClip | null;
  sub: Subscription | undefined;
  imageWidth: number = 200;
  imageMargin: number = 34;
  movieMargin: number = 20;

  constructor( private clipService: ClipService) {

  }

  ngOnInit(): void {

    this.sub = this.clipService.selectedClipChanges$.subscribe(

      selectedClip => this.selectedClip = selectedClip

    );

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  checkTypeClipMovie() : boolean {
    return this.selectedClip?.Type === ClipTypeEnum.Movie;
  }

}
