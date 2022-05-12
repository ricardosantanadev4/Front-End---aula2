import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
// HttpClientModule do site do angular
import { HttpClientModule } from '@angular/common/http';
import { SlipService } from './services/slip.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SlipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
