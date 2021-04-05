import { Injectable } from '@angular/core';
import { IClip } from './clip';

@Injectable()
export class MediaParameterService {

  filterBy!: string;
  selectedClip!: IClip | null;

  constructor() { }
}
