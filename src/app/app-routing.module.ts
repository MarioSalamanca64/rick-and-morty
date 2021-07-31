import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './personajes/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path:'**',
    redirectTo:'home/listado'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
