import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ResultComponent
  ]
})
export class FalconeModule { }
