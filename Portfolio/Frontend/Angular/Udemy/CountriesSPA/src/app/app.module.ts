import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }