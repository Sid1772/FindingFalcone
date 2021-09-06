import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FindFalconeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[FindFalconeComponent]
})
export class GameModule { }
