export class Episode {
  id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  score: number;
  filler: boolean;
  recap: boolean;
  forum_url: string;

  constructor(
    episode = {
      mal_id: 0,
      url: '',
      title: '',
      title_japanese: '',
      title_romanji: '',
      aired: '',
      score: 0,
      filler: false,
      recap: false,
      forum_url: '',
    }
  ) {
    this.id = episode.mal_id;
    this.url = episode.url;
    this.title = episode.title;
    this.title_japanese = episode.title_japanese;
    this.title_romanji = episode.title_romanji;
    this.aired = episode.aired;
    this.score = episode.score;
    this.filler = episode.filler;
    this.recap = episode.recap;
    this.forum_url = episode.forum_url;
  }
}