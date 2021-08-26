import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainOneComponent } from './main-one/main-one.component';
import { MainTwoComponent } from './main-two/main-two.component';


@NgModule({
  declarations: [MainComponent, MainOneComponent, MainTwoComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
