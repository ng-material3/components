import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './navigation-bar.component';
import { NavigationBarButtonComponent } from './navigation-bar-button.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    NavigationBarButtonComponent
  ],
  exports: [
    NavigationBarComponent,
    NavigationBarButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationBarModule { }
