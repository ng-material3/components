import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { ColComponent } from './col.component';
import { RowComponent } from './row.component';

@NgModule({
  declarations: [
    GridComponent,
    ColComponent,
    RowComponent
  ],
  exports: [
    GridComponent,
    ColComponent,
    RowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridModule { }
