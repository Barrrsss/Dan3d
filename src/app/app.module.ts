import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing-module/app-routing-module.module';
import { MainComponent } from './main/main.component';
import {CarouselModule} from "ngx-carousel-lib";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
