import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components.module';
import { DirectivesModule } from './directives.module';

@NgModule({
  declarations: [],
  exports: [
    ComponentsModule,
    DirectivesModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule
  ]
})
export class Md3Module { }
