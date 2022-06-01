import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListManagerRoutingModule } from './movie-list-manager-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PopularComponent } from './components/popular/popular.component';
import { MovieListItemComponent } from './components/shared/movie-list-item/movie-list-item.component';


@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    NowPlayingComponent,
    UpcomingComponent,
    PopularComponent,
    MovieListItemComponent 
  ],
  imports: [
    CommonModule,
    MovieListManagerRoutingModule
  ]
})
export class MovieListManagerModule { }
