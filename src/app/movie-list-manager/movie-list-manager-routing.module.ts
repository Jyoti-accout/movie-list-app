import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularComponent } from './components/popular/popular.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'now-playing',
        component: NowPlayingComponent,
      },
      {
        path: 'popular',
        component: PopularComponent,
      },
      {
        path: 'upcoming',
        component: UpcomingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListManagerRoutingModule {}
