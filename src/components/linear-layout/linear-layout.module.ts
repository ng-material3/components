import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinearLayoutComponent } from './linear-layout.component';

@NgModule({
  declarations: [
    LinearLayoutComponent
  ],
  exports: [
    LinearLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LinearLayoutModule { }
