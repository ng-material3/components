import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [
    SwitchComponent
  ],
  exports: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SwitchModule { }
