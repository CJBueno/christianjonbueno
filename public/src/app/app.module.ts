import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotleftComponent } from './botleft/botleft.component';
import { BotrightComponent } from './botright/botright.component';
import { MainComponent } from './main/main.component';
import { TopleftComponent } from './topleft/topleft.component';
import { ToprightComponent } from './topright/topright.component';

@NgModule({
  declarations: [
    AppComponent,
    BotleftComponent,
    BotrightComponent,
    MainComponent,
    TopleftComponent,
    ToprightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
