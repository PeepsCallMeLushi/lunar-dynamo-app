import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './elements/home/home.component';
import { IlevelCalculatorComponent } from './elements/ilevel-calculator/ilevel-calculator.component';
import { LinksComponent } from './elements/links/links.component';
import { FcInfoComponent } from './elements/fc-info/fc-info.component';
import { FcRulesComponent } from './elements/fc-info/fc-rules/fc-rules.component';


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
    path: 'fc-info',
    component: FcInfoComponent,
    children: [
      {
        path: 'rules',
        component: FcRulesComponent
      },
      {
        path: 'roles',
        component: FcRulesComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
