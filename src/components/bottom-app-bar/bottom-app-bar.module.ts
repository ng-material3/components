import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomAppBarComponent } from './bottom-app-bar.component';

@NgModule({
  declarations: [
    BottomAppBarComponent
  ],
  exports: [
    BottomAppBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BottomAppBarModule { }
