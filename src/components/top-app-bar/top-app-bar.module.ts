import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopAppBarComponent } from './top-app-bar.component';

@NgModule({
  declarations: [
    TopAppBarComponent
  ],
  exports: [
    TopAppBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopAppBarModule { }
