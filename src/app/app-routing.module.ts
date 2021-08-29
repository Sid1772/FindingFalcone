import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'game',component:FindFalconeComponent},
  {path:'result',component:ResultComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
