import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnuncioModule} from './anuncios/anuncio/anuncio.module';

import {AnuncioListModule} from './anuncios/anuncio-list/anuncio-list.module';
import {AnuncioFormModule} from './anuncios/anuncio-form/anuncio-form.module';

import {VmessageModule} from './vmessage/vmessage.module';
import {NavbarModule} from './navbar/navbar.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnuncioModule,
    AnuncioListModule,
    AnuncioFormModule,
    VmessageModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
