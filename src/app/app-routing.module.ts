import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PesquisaComponent } from './views/pesquisa/pesquisa.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pesquisa', component: PesquisaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
