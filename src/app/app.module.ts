import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { FalconeModule } from './falcone/falcone.module';
import { GameModule } from './game/game.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    FalconeModule,
    GameModule,
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
