import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { TwoOneComponent } from './two-one/two-one.component';
import { TwoTwoComponent } from './two-two/two-two.component';


@NgModule({
  declarations: [TwoComponent, TwoOneComponent, TwoTwoComponent],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class TwoModule { }
