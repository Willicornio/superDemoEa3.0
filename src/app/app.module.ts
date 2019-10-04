import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HerogeneralComponent } from './herogeneral/herogeneral.component';
import { HerologuinComponent } from './herologuin/herologuin.component';
import { HerocrearComponent } from './herocrear/herocrear.component';

@NgModule({
  declarations: [
    AppComponent,
    HerogeneralComponent,
    HerologuinComponent,
    HerocrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
