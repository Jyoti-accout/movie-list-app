export interface Movie {
  title?: string;
  vote_average?: number;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  genre_ids?: number[];
  genres?: string[];
  release_date?: string;
}
export enum MovieType {
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  NOW_PLAYING = 'now_playing',
  UPCOMING = 'upcoming',
}
