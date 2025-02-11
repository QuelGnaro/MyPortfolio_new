import { NgModule } from '@angular/core';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { SharedModule } from '../../shared/shared.module';
import { AnimePosterRendererComponent } from '../../components/ag-grid/anime-poster-render.component';
import { PrimeNgModule } from '../../shared/primeng.module';
import { ImageSliderComponent } from '../../components/3d-carousel/image-slider.component';

@NgModule({
  declarations: [
    AnimeListComponent,
    AnimeDetailComponent,
    EpisodeDetailComponent,
    AnimePosterRendererComponent,
    ImageSliderComponent
  ],
  imports: [
    AnimeRoutingModule,
    SharedModule,
    PrimeNgModule
  ],
  providers: [],
})
export class AnimeModule { }