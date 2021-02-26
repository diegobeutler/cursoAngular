import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {RouterModule} from '@angular/router';
import {AnuncioListResolver} from './anuncio-list.resolver';
import {FilterByTitlePipe} from './filter-by-title.pipe';
import {AnunciosComponent} from './anuncios/anuncios.component';
import {AnuncioModule} from '../anuncio/anuncio.module';

@NgModule({
  declarations: [
    AnuncioListComponent,
    AnunciosComponent,
    FilterByTitlePipe
  ],
  exports: [
    AnuncioListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AnuncioModule
  ]
})
export class AnuncioListModule{
}
