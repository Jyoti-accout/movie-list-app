import { Component, OnInit } from '@angular/core';
import { MovieType } from '../../models/movie-list.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent {
  movies$ = this.movieListService.getMovielist(MovieType.NOW_PLAYING);

  constructor(private movieListService: MovieListService) {}
}
