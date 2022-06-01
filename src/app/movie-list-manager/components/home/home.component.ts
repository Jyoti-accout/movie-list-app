import { Component, OnInit } from '@angular/core';
import { MovieType } from '../../models/movie-list.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movies$ = this.movieListService.getMovielist(MovieType.TOP_RATED);
  constructor(private movieListService: MovieListService) {}
}
