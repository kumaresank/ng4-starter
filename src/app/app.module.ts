import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouteModule } from './app.routes';
import { CountryService } from './services/country.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
