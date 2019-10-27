import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { SideNavComponent } from './elements/side-nav/side-nav.component';
import { HomeComponent } from './elements/home/home.component';
import { IlevelCalculatorComponent } from './elements/ilevel-calculator/ilevel-calculator.component';
import { LinksComponent } from './elements/links/links.component';
import { FormsModule } from '@angular/forms';
import { InputProtectorDirective } from './shared/directives/input-protector.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    IlevelCalculatorComponent,
    LinksComponent,
    InputProtectorDirective
  ],
  imports: [
    SharedModule,
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
