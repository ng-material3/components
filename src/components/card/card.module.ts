import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardActionsComponent } from './card-actions.component';
import { CardContentComponent } from './card-content.component';
import { CardHeaderComponent } from './card-header.component';
import { CardHeadlineComponent } from './card-headline.component';
import { CardImageComponent } from './card-image.component';
import { CardSubheadComponent } from './card-subhead.component';

@NgModule({
  declarations: [
    CardComponent,
    CardActionsComponent,
    CardContentComponent,
    CardHeaderComponent,
    CardHeadlineComponent,
    CardImageComponent,
    CardSubheadComponent
  ],
  exports: [
    CardComponent,
    CardActionsComponent,
    CardContentComponent,
    CardHeaderComponent,
    CardHeadlineComponent,
    CardImageComponent,
    CardSubheadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
