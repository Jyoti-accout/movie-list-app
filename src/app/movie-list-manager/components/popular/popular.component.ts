import { Component, OnInit } from '@angular/core';
import { Movie, MovieType } from '../../models/movie-list.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieListService: MovieListService) {}
  ngOnInit(): void {
    this.movieListService.getMovielist(MovieType.POPULAR).subscribe((data) => {
      this.movies = data;
    });
  }
}
