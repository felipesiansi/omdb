import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IClip } from './clip';

@Injectable()
export class ClipService {

  private selectedClipSource = new BehaviorSubject<IClip | null>(null);
  selectedClipChanges$ = this.selectedClipSource.asObservable();

  constructor() { }

  changeSelectedClip(selectedClip: IClip | null) : void {
    this.selectedClipSource.next(selectedClip);
  }
}
