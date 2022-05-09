import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorLayoutComponent } from './coordinator-layout.component';

@NgModule({
  declarations: [
    CoordinatorLayoutComponent
  ],
  exports: [
    CoordinatorLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoordinatorLayoutModule { }
