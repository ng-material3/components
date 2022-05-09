import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelativeLayoutComponent } from './relative-layout.component';

@NgModule({
  declarations: [
    RelativeLayoutComponent
  ],
  exports: [
    RelativeLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RelativeLayoutModule { }
