import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BrowserAnimationsModule,MatSelectModule,FormsModule,MatIconModule,MatProgressSpinnerModule,AppRoutingModule,FooterComponent,NavComponent,HttpClientModule]
})
export class SharedModule { }
