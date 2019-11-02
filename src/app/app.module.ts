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
import { FcInfoComponent } from './elements/fc-info/fc-info.component';
import { FcRulesComponent } from './elements/fc-info/fc-rules/fc-rules.component';
import { AboutComponent } from './elements/about/about.component';
import { BigPictureComponent } from './elements/about/big-picture/big-picture.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    IlevelCalculatorComponent,
    LinksComponent,
    InputProtectorDirective,
    FcInfoComponent,
    FcRulesComponent,
    AboutComponent,
    BigPictureComponent
  ],
  imports: [
    SharedModule,
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [
    BigPictureComponent
  ],
  exports: [],
  providers: [
    AppComponent,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
