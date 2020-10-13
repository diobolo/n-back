import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivergentRoutingModule } from './divergent-routing.module';
import { DivergentComponent } from './divergent.component';


@NgModule({
  declarations: [DivergentComponent],
  imports: [
    CommonModule,
    DivergentRoutingModule
  ]
})
export class DivergentModule { }
