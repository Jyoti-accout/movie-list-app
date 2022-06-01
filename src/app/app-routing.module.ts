import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movielist',
    loadChildren: () =>
      import('./movie-list-manager/movie-list-manager.module').then(
        (m) => m.MovieListManagerModule
      ),
  },

  
  { 
    path: '**',
   redirectTo: 'movielist' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
