import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../../../models/anime/anime.model';
import type { ColDef, DomLayoutType, GridApi, GridOptions, GridReadyEvent, SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { AnimePosterRendererComponent } from '../../../components/ag-grid/anime-poster-render.component';
import { AnimeService } from '../../../services/anime.service';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.scss'
})
export class AnimeListComponent implements OnInit {
  private gridApi!: GridApi<Anime>;

  domLayout: DomLayoutType = "autoHeight";
  paginationPageSize: number = 15;
  cacheBlockSize: number = 10;
  paginationPageSizeSelector: number[] = [5, 15, 25];
  topAnime: Anime[] = [];

  search: string = '';
  animeList: Anime[] = [];
  selectedItem: any;

  loading: boolean = false;
  loadAnimelist: boolean = false;
  searched: boolean = false;


  constructor(private animeListService: AnimeService, private router: Router) {
    ModuleRegistry.registerModules([AllCommunityModule]);
    if (localStorage.getItem('searchedAnime')) {
      this.animeList = JSON.parse(localStorage.getItem('searchedAnime') || '');
      this.loadAnimelist = true;
      this.searched = true;
    }
  }
  ngOnInit(): void {
    this.getTopAnime();
  }

  myTheme = themeQuartz
    .withParams({
      accentColor: "#000000B8",
      backgroundColor: "#AAC4C0",
      borderColor: "#22456b",
      browserColorScheme: "dark",
      chromeBackgroundColor: {
        ref: "foregroundColor",
        mix: 0.07,
        onto: "backgroundColor"
      },
      fontFamily: {
        googleFont: "Open Sans"
      },
      foregroundColor: "#000000",
      headerFontSize: 14,
      headerTextColor: "#000000"
    });

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    cellStyle: {
      whiteSpace: 'normal', // it's important for the text to wrap
      wordBreak: 'break-word', // it's important for the text to wrap
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    }
  };


  columnDefs: ColDef[] = [
    {
      field: 'images.jpg.large_image_url',
      headerName: 'Poster',
      cellRenderer: AnimePosterRendererComponent,
    },
    { colId: "title", field: 'title', headerName: 'Title', },
    { field: 'title_japanese', headerName: 'Japansese Title', },
    { field: 'episodes', headerName: 'Episodes' },
    { field: 'score', headerName: 'Score' }
  ];



  animeGridOptions: GridOptions = {
    theme: this.myTheme,
    rowSelection: 'single',
    rowModelType: 'clientSide',
    pagination: true,
    paginationPageSize: 50,
    domLayout: 'autoHeight',
    animateRows: true,
    autoSizeStrategy: {
      type: 'fitCellContents'
    },
    // getRowId: (params: GetRowIdParams) => params.data.agency_id,
    onGridReady: ($event: GridReadyEvent) => this.onGridReady($event),
  };

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', () => params.api.sizeColumnsToFit());
  }

  // this set the grid to auto height
  setAutoHeight() {
    this.gridApi.setGridOption("domLayout", "autoHeight");
    (document.querySelector<HTMLElement>("#myGrid")! as any).style.height = "";
  }

  // this fit the grid within the width of the grid div
  public autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
      type: "fitGridWidth",
    };

  searchAnime() {
    this.animeListService.getAnime(this.search).subscribe((res) => {
      this.animeList = res;
      this.setTimeout();
      this.storeResearchedAnime();
    });
  }

  onRowClicked(event: any) {
    const id = event.data.id;
    this.animeDetail(id);
  }

  // todo: implementare metodo per navigare alla pagina di dettaglio dell'anime
  animeDetail(id: number) {
    this.router.navigate([`anime-list/anime-detail/${id}`]);
  }

  // set timeout per loading
  setTimeout() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.loadAnimelist = true;
      this.searched = true;
    }, 1500);
  }

  // metodo per salvare la lista di anime ricercata
  storeResearchedAnime() {
    localStorage.setItem('searchedAnime', JSON.stringify(this.animeList));
  }

  getTopAnime() {
    this.animeListService.getTopAnime().subscribe((res) => {
      this.topAnime = res.slice(0, 10);

    });
  }

}
