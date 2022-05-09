import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioComponent } from './radio.component';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [
    RadioComponent,
    RadioGroupComponent
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RadioModule { }
