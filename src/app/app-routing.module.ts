import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'authorize',
    loadChildren: () => import('./authorize/authorize.module').then(m => m.AuthorizeModule)
  }, {
    path: 'divergent',
    loadChildren: () => import('./divergent/divergent.module').then(m => m.DivergentModule)
  }, {
    path: 'n-back',
    loadChildren: () => import('./n-back/n-back.module').then(m => m.NBackModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
