import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMedia } from './media';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MediaService {
  private mediaUrl = 'http://www.omdbapi.com/?apikey=792d44f9';
  private medias: IMedia | undefined;
  private titleMedia: string = '';
  private mediasPagination: IMedia | undefined;

  private selectedMediaSource = new BehaviorSubject<IMedia | null>(null);
  selectedMediaChanges$ = this.selectedMediaSource.asObservable();

  constructor(private http: HttpClient) {}

  changeSelectedMedia(selectedMedia: IMedia | null): void {
    this.selectedMediaSource.next(selectedMedia);
  }

  getMedias(title: string): Observable<IMedia> {
    if (this.medias && !this.medias.Error && title === this.titleMedia) {
      return of(this.medias);
    }

    this.titleMedia = title;

    let queryParams = new HttpParams();
    queryParams = queryParams.append('s', title);
    return this.http
      .get<IMedia>(this.mediaUrl, { params: queryParams })
      .pipe(tap((data) => (this.medias = data)));
  }

  getMediasByTitleAndPage(numberPage: number): Observable<IMedia> {

    let queryParams = new HttpParams();
    queryParams = queryParams.append('s', this.titleMedia).append('page',numberPage.toString());

    return this.http
      .get<IMedia>(this.mediaUrl, { params: queryParams })
      .pipe(tap((data) => (this.medias = data)));
  }
}
