import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingActionButtonComponent } from './floating-action-button.component';

@NgModule({
  declarations: [
    FloatingActionButtonComponent
  ],
  exports: [
    FloatingActionButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FloatingActionButtonModule { }
