import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie-list-manager/models/movie-list.model';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent implements OnInit {
  imageBaseURL = 'https://image.tmdb.org/t/p';
  backdropwidth = 'w780';
  posterwidth = 'w185';

  @Input() movie!: Movie;

  movieDetailBackgroundStyle: any = {};

  constructor() {}

  ngOnInit(): void {
    this.movieDetailBackgroundStyle = {
      background:
        `url(${this.imageBaseURL}/${this.backdropwidth}/${this.movie.backdrop_path}) lightgray no-repeat`,
      backgroundSize: 'cover',
    };
  }
}
