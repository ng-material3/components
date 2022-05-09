import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRailComponent } from './navigation-rail.component';
import { NavigationRailButtonComponent } from './navigation-rail-button.component';

@NgModule({
  declarations: [
    NavigationRailComponent,
    NavigationRailButtonComponent
  ],
  exports: [
    NavigationRailComponent,
    NavigationRailButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationRailModule { }
