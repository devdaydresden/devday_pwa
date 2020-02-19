import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './modules/components.module';
import { ExamplesPageComponent } from './pages/examples-page/examples-page.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule,
    OverlayModule,
    RatingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
      ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
