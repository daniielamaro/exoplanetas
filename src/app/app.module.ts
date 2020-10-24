import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeService } from './views/home/home.service';
import { AlertasService } from './shared/alertas.service';
import { PesquisaService } from './views/pesquisa/pesquisa.service';

import { HomeComponent } from './views/home/home.component';
import { PesquisaComponent } from './views/pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HomeService,
    AlertasService,
    PesquisaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
