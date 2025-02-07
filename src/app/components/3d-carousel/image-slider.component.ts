import { Component, Input } from '@angular/core';
import { Anime } from '../../models/anime/anime.model';

@Component({
  selector: 'app-image-slider',
  template: `
<div class="banner">
  <div class="slider" [style.--quantity]="topAnime.length">
    <div class="item" *ngFor="let item of topAnime; let i = index" [style.--position]="i">
      <img [src]="item.images.jpg.large_image_url" alt="anime_poster">
    </div>
  </div>
  <div class="content">
            <h1 data-content="Anime List">
                Anime List
            </h1>
        </div>
</div>
  `,
  styles: [`
  .banner{
    width: 100%;
    height: 70vh;
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  .banner .slider{
    position: absolute;
    width:200px;
    height: 250px;
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    trasnsform: perspective(1000px);
    animation: autoRun 20s linear infinite;  
  }

  @keyframes autoRun{
    from{
      transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
    }
    to{
      transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }}

  .banner .slider .item{
    position: absolute;
    inset: 0 0 0 0;
    transform: 
        rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(26rem);
  }

  .banner .slider .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .banner .content{
    position: absolute;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.banner .content h1{
    font-family: 'Arial Black', sans-serif;
    font-size: 7em;
    line-height: 1em;
    color: #fff;
    position: relative;
}
.banner .content h1::after{
    position: absolute;
    inset: 0 0 0 0;
    content: attr(data-content);
    z-index: 2;
    -webkit-text-stroke: 4px #00aa5b;
    color: transparent;
}
  `]
})
export class ImageSliderComponent {

  @Input() topAnime: Anime[] = [];


}