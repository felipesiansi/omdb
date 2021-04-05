import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMovie } from './movie';

@Injectable()
export class MovieService {

  private mediaUrl = 'http://www.omdbapi.com/?apikey=792d44f9';
  private movie: IMovie | undefined;


  constructor(private http: HttpClient) { }

  getMovieByImdbId(imdbId: string | null | undefined): Observable<IMovie> {

    let id : string  = imdbId?.toString() as string;

    let queryParams = new HttpParams();

    queryParams = queryParams.append('i', id);
    return this.http
      .get<IMovie>(this.mediaUrl, { params: queryParams })
      .pipe(tap((data) => (this.movie = data)));
  }

}
