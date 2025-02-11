import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Anime } from '../models/anime/anime.model';
import { Episode } from '../models/anime/episode.model';
import { SingleEpisode } from '../models/anime/single-episode.model';
import { Statistic } from '../models/anime/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  baseUrl: string = 'https://api.jikan.moe/v4/anime';
  topAnimeUrl: string = 'https://api.jikan.moe/v4/top/anime';

  constructor(private http: HttpClient) { }

  getTopAnime(): Observable<Anime[]> {
    return this.http
      .get(this.topAnimeUrl)
      .pipe(map((res: any) => res.data.map((anime: any) => new Anime(anime))));
  }

  getCharacters(id: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}/characters`)
      .pipe(map((res: any) => res.data));
  }

  getAnime(search: string): Observable<Anime[]> {
    return this.http
      .get(`${this.baseUrl}?q=${search}`)
      .pipe(map((res: any) => res.data.map((anime: any) => new Anime(anime))));
  }

  getAnimeById(id: string): Observable<Anime> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(map((res: any) => new Anime(res.data)));
  }

  getEpisodes(id: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}/episodes`)
      .pipe(
        map((res: any) => res.data.map((episode: any) => new Episode(episode)))
      );
  }

  getStatistics(id: string) {
    return this.http
      .get(`${this.baseUrl}/${id}/statistics`)
      .pipe(map((res: any) => new Statistic(res.data)));
  }


  getEpisodesDetail(id: string, episodeId: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}/episodes/${episodeId}`)
      .pipe(
        map((res: any) => new SingleEpisode(res.data)
        )
      );
  }
}
