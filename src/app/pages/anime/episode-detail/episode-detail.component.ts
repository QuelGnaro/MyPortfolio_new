import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '../../../models/anime/anime.model';
import { SingleEpisode } from '../../../models/anime/single-episode.model';
import { AnimeService } from '../../../services/anime.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss'
})
export class EpisodeDetailComponent {
  // variabili per episode detail
  episodeId: string = '';
  episode: SingleEpisode = new SingleEpisode();
  animeId: string = '';
  anime: Anime = new Anime();

  constructor(private animeService: AnimeService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.episodeId = params['episodeId'];
      this.animeId = params['animeId'];
      this.animeService.getAnimeById(this.animeId).subscribe((res) => {
        this.anime = res;
      });
      this.animeService.getEpisodesDetail(this.animeId, this.episodeId).subscribe((res: SingleEpisode) => {
        this.episode = res;
        console.log(this.episode);
      });
    });
  }

}
