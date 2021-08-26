import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';
import { OneOneComponent } from './one-one/one-one.component';
import { OneTwoComponent } from './one-two/one-two.component';


@NgModule({
  declarations: [OneComponent, OneOneComponent, OneTwoComponent],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }
