import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NBackComponent } from './n-back.component';

const routes: Routes = [{ path: '', component: NBackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NBackRoutingModule { }
