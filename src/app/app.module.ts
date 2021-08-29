import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { AppConfig } from './app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFalconeComponent,
    ResultComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
