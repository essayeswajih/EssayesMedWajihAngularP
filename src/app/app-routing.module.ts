import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'inscription',
    component:InscriptionComponent
  },
  {
    path:'connexion',
    component:ConnexionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
