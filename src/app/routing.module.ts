import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerogeneralComponent }from './herogeneral/herogeneral.component';
import { HerologuinComponent } from './herologuin/herologuin.component';
import { HerocrearComponent } from './herocrear/herocrear.component';


const routes: Routes = [

    {path: 'api/login', component: HerologuinComponent},
    {path: 'api/general/:id', component: HerogeneralComponent},
    {path: 'api/crear', component: HerocrearComponent},
    {path: '', redirectTo: '/api/login', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }