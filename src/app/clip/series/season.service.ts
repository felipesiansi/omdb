import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISeason } from './season';

@Injectable()
export class SeasonService {

  private mediaUrl = 'http://www.omdbapi.com/?apikey=792d44f9';
  private season: ISeason | undefined;


  constructor(private http: HttpClient) { }

  getSeasonBySerieImdbId(imdbId: string | null | undefined, season: number): Observable<ISeason> {

    let id : string  = imdbId?.toString() as string;

    let queryParams = new HttpParams();

    queryParams = queryParams.append('i', id).append('Season', season.toString());
    return this.http
      .get<ISeason>(this.mediaUrl, { params: queryParams })
      .pipe(tap((data) => (this.season = data)));
  }
}
