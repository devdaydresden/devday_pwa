import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesPageComponent } from '../pages/examples-page/examples-page.component';


const routes: Routes = [
    { path: '',
      redirectTo: '/examples',
      pathMatch: 'full'
    },
    {
        path: 'examples',
        component: ExamplesPageComponent
      },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
