import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivergentComponent } from './divergent.component';

const routes: Routes = [{ path: '', component: DivergentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivergentRoutingModule { }
