import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NBackRoutingModule } from './n-back-routing.module';
import { NBackComponent } from './n-back.component';


@NgModule({
  declarations: [NBackComponent],
  imports: [
    CommonModule,
    NBackRoutingModule
  ]
})
export class NBackModule { }
