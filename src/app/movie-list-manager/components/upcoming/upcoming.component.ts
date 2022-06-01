import { Component, OnInit } from '@angular/core';
import { MovieType } from '../../models/movie-list.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent {
  movies$ = this.movieListService.getMovielist(MovieType.UPCOMING);
  constructor(private movieListService: MovieListService) {}
}
