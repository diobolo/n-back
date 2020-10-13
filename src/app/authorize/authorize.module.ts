import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizeComponent } from './authorize/authorize.component';
import { AuthorizeRoutingModule } from './authorize-routing.module';

@NgModule({
  declarations: [AuthorizeComponent],
  imports: [
    CommonModule,
    AuthorizeRoutingModule
  ]
})
export class AuthorizeModule { }
