export class SingleEpisode {

  id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  duration: number;
  aired: Date;
  filler: boolean;
  recap: boolean;
  synopsis: string;

  constructor(
    singleEpisode = {
      mal_id: 0,
      url: '',
      title: '',
      title_japanese: '',
      title_romanji: '',
      duration: 0,
      aired: new Date(),
      filler: false,
      recap: false,
      synopsis: '',
    }
  ) {
    this.id = singleEpisode.mal_id;
    this.url = singleEpisode.url;
    this.title = singleEpisode.title;
    this.title_japanese = singleEpisode.title_japanese;
    this.title_romanji = singleEpisode.title_romanji;
    this.duration = singleEpisode.duration;
    this.aired = singleEpisode.aired;
    this.filler = singleEpisode.filler;
    this.recap = singleEpisode.recap;
    this.synopsis = singleEpisode.synopsis;
  }

}