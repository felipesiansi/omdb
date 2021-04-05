import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISerie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private mediaUrl = 'http://www.omdbapi.com/?apikey=792d44f9';
  private serie: ISerie | undefined;


  constructor(private http: HttpClient) { }

  getSerieByImdbId(imdbId: string | null | undefined): Observable<ISerie> {

    let id : string  = imdbId?.toString() as string;

    let queryParams = new HttpParams();

    queryParams = queryParams.append('i', id);
    return this.http
      .get<ISerie>(this.mediaUrl, { params: queryParams })
      .pipe(tap((data) => (this.serie = data)));
  }
}
