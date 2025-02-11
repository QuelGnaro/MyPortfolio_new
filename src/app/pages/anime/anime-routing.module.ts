import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'search', component: AnimeListComponent, },
    { path: 'anime-detail/:animeId', component: AnimeDetailComponent },
    { path: 'anime-detail/:animeId/episode-detail/:episodeId', component: EpisodeDetailComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full', },
  ]
  )],
  exports: [RouterModule],
})
export class AnimeRoutingModule { }