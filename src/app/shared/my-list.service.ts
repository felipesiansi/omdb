import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IClip } from './clip';

export abstract class MyListPublisher {

  location: string = '';

  abstract add(record: IClip): Observable<boolean>;
  abstract clear(record: IClip): Observable<boolean>;
  abstract clearAll(): Observable<boolean>;
  abstract checkClipInList(clipCheck: IClip): boolean;
}

@Injectable()
export class MyListService extends MyListPublisher {

 private clipsInMyList : IClip[] = [];

  constructor() {
    super();
    this.location = "clip";
  }

  getAll(): Observable<IClip[]> {
    let values: IClip[] = [];

    values = JSON.parse(this.getItensLocalStorage() || '[]');
    return of(values);
  }

  add(record: IClip): Observable<boolean> {
    let ret: boolean = false;
    let values: IClip[] = [];
    try {

      values = JSON.parse(this.getItensLocalStorage() || '[]');
      values.push(record);
      this.setItemLocalStorage(values);
      this.clipsInMyList = [];
      values.forEach( clip => {

       this.clipsInMyList.push(clip);

      })

      ret = true;
    }
    catch (ex) {
      console.log(ex);
    }

    return of(ret);
  }

  private getItensLocalStorage(): string | null {
    return localStorage.getItem(this.location);
  }

  private setItemLocalStorage(values: IClip[]) {
    localStorage.setItem(this.location, JSON.stringify(values));
  }

  clear(record: IClip): Observable<boolean> {

    let values: IClip[] = [];

    values = JSON.parse(this.getItensLocalStorage() || '[]');

    this.clearAll();

    this.removeValueClip(values, record);

    this.setItemLocalStorage(values);
    this.clipsInMyList = values;
    return of(true);
  }

  private removeValueClip(values: IClip[], record: IClip) {
    const foundIndex = values.findIndex(item => item.imdbID === record.imdbID);
    if (foundIndex && foundIndex > -1) {
      values?.splice(foundIndex, 1);
    }
  }

  clearAll(): Observable<boolean> {

    this.clipsInMyList = [];
    localStorage.removeItem(this.location);
    return of(true);
  }

  checkClipInList(clipCheck: IClip): boolean{

   return this.clipsInMyList?.some(clip => clip.imdbID === clipCheck.imdbID);

  }

}
