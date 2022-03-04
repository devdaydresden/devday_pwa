import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './modules/components.module';
import { ExamplesPageComponent } from './pages/examples-page/examples-page.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SessiongridComponent } from './pages/sessiongrid/sessiongrid/sessiongrid.component';
import { FavouritesComponent } from './pages/favourites/favourites/favourites.component';
import { YourTicketComponent } from './pages/your-ticket/your-ticket/your-ticket.component';
import { SpeakersComponent } from './pages/speakers/speakers/speakers.component';
import { SpeakerComponent } from './pages/speaker/speaker/speaker.component';
import { LoginService } from './services/login.service';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AccessTokenInterceptor } from './interceptors/access-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesPageComponent,
    LoginComponent,
    HomeComponent,
    SessiongridComponent,
    FavouritesComponent,
    YourTicketComponent,
    SpeakersComponent,
    SpeakerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule,
    OverlayModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
      ComponentsModule
  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
