import '../rxjs/rxjs.extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppComponent } from '../components/app.component';
import { DashboardComponent } from '../components/dashboard.component';
import { HeroesComponent } from '../components/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail.component';
import { HeroSearchComponent } from '../components/hero-search.component';

import { HeroService } from '../services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
