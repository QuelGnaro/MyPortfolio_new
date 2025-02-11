import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-anime-poster-renderer',
  template: `
    <img
      #posterImage
      [src]="params.value"
      (load)="onImageLoad()"
      [style.width.px]="150"
      alt="Anime Poster"
    />
  `
})
export class AnimePosterRendererComponent implements ICellRendererAngularComp {
  public params: any;

  @ViewChild('posterImage', { static: false }) posterImage!: ElementRef;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  onImageLoad(): void {
    if (this.params.api && this.posterImage) {
      const imageHeight = this.posterImage.nativeElement.clientHeight;
      this.params.api.getRowNode(this.params.node.rowIndex)!.setRowHeight(imageHeight + 20); // Aggiungi margine extra
      this.params.api.onRowHeightChanged(); // Notifica Ag-Grid del cambiamento
    }
  }
}