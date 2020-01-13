import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './shared/helper/fake-backend';

import { JwtInterceptor } from './shared/helper/jwt.interceptor';
import { ErrorInterceptor } from './shared/helper/error.interceptor';

import { appRoutingModule } from './routing/app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlertComponent } from './modules/alert/components/alert/alert.component';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, appRoutingModule],
  declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent, AlertComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
