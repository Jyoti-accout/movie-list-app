import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieType } from '../models/movie-list.model';

const BASEURL = 'https://api.themoviedb.org/3';
@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  genrieList: { [key: number]: string } = {};
  quaryParams = new HttpParams()
    .append('api_key', 'e48aad337acd593dd3d1f9bb9d354759')
    .append('language', 'en-US')
    .append('region', 'IN');
  constructor(private httpClient: HttpClient) {}

  getMovielist(movieType: MovieType) {
    if (Object.keys(this.genrieList).length === 0) {
      this._fetchGenrieList();
    }
    let url = BASEURL + '/movie/' + movieType;

    return this.httpClient
      .get<{ results: Movie[] }>(url, { params: this.quaryParams })
      .pipe(
        map((data) => {
          return data.results.map((item) => {
            return {
              title: `${item.title} (${new Date(
                <string>item.release_date
              ).getFullYear()})`,
              vote_average: item.vote_average,
              poster_path: item.poster_path,
              backdrop_path: item.backdrop_path,
              overview: item.overview,
              genre_ids: item.genre_ids,
              genres: this.getGenreList(item.genre_ids),
            };
          });
        })
      );
  }
  private getGenreList(ids: number[] | undefined): string[] | undefined {
    if (Object.keys(this.genrieList).length === 0) {
      return [];
    }
    const genres: string[] = [];
    ids && ids.forEach((id) => genres.push(this.genrieList[id]));
    return genres;
  }
  private _fetchGenrieList() {
    let url = BASEURL + '/genre/movie/list';
    this.httpClient
      .get(url, { params: this.quaryParams })
      .subscribe((item: any) => {
        if (item && item.genres.length > 0) {
          item.genres.forEach((genrie: any) => {
            genrie.id && (this.genrieList[genrie.id] = genrie.name);
          });
        }
      });
  }
}
