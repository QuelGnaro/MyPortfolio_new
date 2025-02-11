import { NgModule } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChartModule } from 'primeng/chart';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';


const primeNgModules = [ButtonModule, ImageModule, CardModule, AutoCompleteModule, CalendarModule, CheckboxModule, DropdownModule, InputTextModule, InputNumberModule, SplitButtonModule, DataViewModule, PaginatorModule, TableModule, BreadcrumbModule, ChartModule, CarouselModule, GalleriaModule, ChipModule, DividerModule, ScrollTopModule, DialogModule, TabMenuModule, TimelineModule, AnimateOnScrollModule, AccordionModule, ToastModule, RadioButtonModule];

@NgModule({
  declarations: [],
  imports: [...primeNgModules],
  exports: [...primeNgModules]
})
export class PrimeNgModule { };