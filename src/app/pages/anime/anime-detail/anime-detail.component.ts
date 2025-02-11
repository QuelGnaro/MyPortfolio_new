import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../../../models/anime/anime.model';
import { AnimeService } from '../../../services/anime.service';
import { Episode } from '../../../models/anime/episode.model';
import { Statistic } from '../../../models/anime/statistics.model';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;


  animeId: string = '';
  anime: Anime = new Anime();
  statistics: Statistic = new Statistic();
  episodes: Episode[] = [];
  characters: any[] = [];
  chart: any;
  showChart: boolean = false;


  // Dati e opzioni del grafico
  chartData: any;
  chartOptions: any;


  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService, private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.animeId = params['animeId'];
      this.animeService.getAnimeById(this.animeId).subscribe((res: Anime) => {
        this.anime = res;
        console.log(this.anime);
      });
      this.animeService
        .getEpisodes(this.animeId)
        .subscribe((res: Episode[]) => {
          this.episodes = res;
        });
      this.loadCharacters();
    });
  }

  ngOnInit() {
    this.prepareChartConfig();
    this.getStatistics();
  }

  loadCharacters() {
    this.animeService.getCharacters(this.animeId).subscribe((res) => {
      this.characters = res;
      console.log(res);
    });
  }

  prepareChartConfig() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartData = {
      labels: ['Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch'],
      datasets: [{
        data: [1, 1, 1, 1, 1], // Valori temporanei
        backgroundColor: [
          documentStyle.getPropertyValue('--purple'),
          documentStyle.getPropertyValue('--yellow'),
          documentStyle.getPropertyValue('--cyan'),
          documentStyle.getPropertyValue('--red'),
          documentStyle.getPropertyValue('--indigo')
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--purple-dark'),
          documentStyle.getPropertyValue('--yellow-dark'),
          documentStyle.getPropertyValue('--cyan-dark'),
          documentStyle.getPropertyValue('--red-dark'),
          documentStyle.getPropertyValue('--indigo-dark')
        ]
      }]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: textColor,
            font: {
              size: 14
            },
            usePointStyle: true
          }
        },
        tooltip: {
          bodyFont: {
            size: 14
          }
        }
      }
    };
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'pie',
      data: this.chartData,
      options: this.chartOptions
    });
    console.log(this.chart.data);

  }


  updateChartData() {
    this.chartData.datasets[0].data = [
      this.statistics.watching,
      this.statistics.completed,
      this.statistics.on_hold,
      this.statistics.dropped,
      this.statistics.plan_to_watch
    ];
  }


  getStatistics() {
    this.animeService.getStatistics(this.animeId).subscribe((res: Statistic) => {
      this.statistics = res;
      this.updateChartData();
      this.showChart = true;
      setTimeout(() => this.createChart(), 0);
    });
  }

  goToDetailEpisode(id: number) {
    this.router.navigate([`anime-list/anime-detail/${this.animeId}/episode-detail/${id}`]);
  }
}