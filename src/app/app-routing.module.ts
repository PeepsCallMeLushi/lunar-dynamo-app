import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './elements/home/home.component';
import { IlevelCalculatorComponent } from './elements/ilevel-calculator/ilevel-calculator.component';
import { LinksComponent } from './elements/links/links.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'iLevel-Calculator',
    component: IlevelCalculatorComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path:'**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
