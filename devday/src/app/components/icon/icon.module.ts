import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { IconComponent } from './icon.component';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    BrowserModule,
    AngularSvgIconModule,
    AppRoutingModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule { }
