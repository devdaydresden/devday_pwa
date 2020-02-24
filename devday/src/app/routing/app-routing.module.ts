import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesPageComponent } from '../pages/examples-page/examples-page.component';
import { LoginComponent } from '../pages/login/login/login.component';


const routes: Routes = [
    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'examples',
      component: ExamplesPageComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
