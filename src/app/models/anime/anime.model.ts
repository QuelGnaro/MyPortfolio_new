// cosa bella della classe è il costruttore è solo uno sbatti scriversi tutto. 
export class Anime {
  id: number;
  title: string;
  url: string;
  //si poteva fare o un altro modello o anche solo un interfaccia per non avere una classe enorme per non avere troppe proprietà images{}
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  background: string;
  episodes: number;
  score: number;
  synopsis: string;
  title_japanese: string;

  constructor(
    //questo arriva dal servizio
    anime = {
      mal_id: 0,
      title: '',
      url: '',
      images: {
        jpg: {
          image_url: '',
          small_image_url: '',
          large_image_url: '',
        },
        webp: {
          image_url: '',
          small_image_url: '',
          large_image_url: '',
        },
      },
      background: '',
      episodes: 0,
      score: 0,
      synopsis: '',
      title_japanese: '',
    }
  )
  //questo è come viene convertito
  {
    this.id = anime.mal_id;
    this.title = anime.title;
    this.url = anime.url;
    this.images = anime.images;
    this.background = anime.background;
    this.episodes = anime.episodes;
    this.score = anime.score;
    this.synopsis = anime.synopsis;
    this.title_japanese = anime.title_japanese;
  }
}