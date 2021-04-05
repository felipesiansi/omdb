import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClip } from 'src/app/shared/clip';
import { CriteriaComponent } from 'src/app/shared/criteria/criteria.component';
import { IMedia } from 'src/app/shared/media';
import { MediaParameterService } from 'src/app/shared/media-parameter.service';
import { MediaService } from 'src/app/shared/media.service';
import { ClipService } from '../../shared/clip.service';

@Component({
  selector: 'omdb-clip-shell',
  templateUrl: './clip-shell.component.html',
  styleUrls: ['./clip-shell.component.scss'],
})
export class ClipShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
