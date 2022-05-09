import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextFieldComponent } from './text-field.component';
import { IconButtonModule } from '../icon-button/icon-button.module';

@NgModule({
  declarations: [
    TextFieldComponent
  ],
  exports: [
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconButtonModule
  ]
})
export class TextFieldModule { }
