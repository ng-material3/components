import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationDrawerComponent } from './navigation-drawer.component';
import { NavigationDrawerButtonComponent } from './navigation-drawer-button.component';
import { NavigationDrawerDividerComponent } from './navigation-drawer-divider.component';
import { NavigationDrawerHeadlineComponent } from './navigation-drawer-headline.component';
import { NavigationDrawerLabelComponent } from './navigation-drawer-label.component';
import { NavigationDrawerSectionComponent } from './navigation-drawer-section.component';

@NgModule({
  declarations: [
    NavigationDrawerComponent,
    NavigationDrawerButtonComponent,
    NavigationDrawerDividerComponent,
    NavigationDrawerHeadlineComponent,
    NavigationDrawerLabelComponent,
    NavigationDrawerSectionComponent
  ],
  exports: [
    NavigationDrawerComponent,
    NavigationDrawerButtonComponent,
    NavigationDrawerDividerComponent,
    NavigationDrawerHeadlineComponent,
    NavigationDrawerLabelComponent,
    NavigationDrawerSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationDrawerModule { }
