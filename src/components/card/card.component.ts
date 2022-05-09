import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { CardImageComponent } from './card-image.component';

@Component({
  selector: 'md3-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card'
  }
})
export class CardComponent implements AfterContentInit, OnInit {
  /**
   * @ContentChild cardImage: CardImageComponent | undefined
   */
  @ContentChild(CardImageComponent, { read: CardImageComponent }) cardImage!: CardImageComponent;
 
  /**
   * @HostBinding buttonBinding: boolean | undefined | null = undefined
   */
  @HostBinding('attr.button') buttonBinding!: boolean | null;

  /**
   * @HostBinding layoutBinding: boolean | undefined | null = undefined
   */
  @HostBinding('attr.layout') layoutBinding!: boolean | null;

  /**
   * @HostBinding orientationBinding: string | undefined = undefined
   */
  @HostBinding('attr.orientation') orientationBinding!: string;

  /**
   * @HostBinding typeBinding: string | undefined = undefined
   */
  @HostBinding('attr.type') typeBinding!: string;

  /**
   * @HostListener onClickListener(event: Event): void
   */
  @HostListener('click', ['$event']) onClickListener(event: Event): void {
    if (this.button)
      this.onClick.emit(event);
  }

  /**
   * @Input button: boolean | undefined = undefined
   */
  @Input('button') button!: boolean;
  
  /**
   * @Input layout: boolean | undefined = undefined
   */
  @Input('layout') layout!: boolean;

  /**
   * @Input orientation: 'horizontal' | 'vertical' = 'vertical'
   */
  @Input('orientation') orientation: 'horizontal' | 'vertical' = 'vertical';

  /**
   * @Input type: string = 'filled'
   */
  @Input('type') type: 'elevated' | 'filled' | 'outlined' = 'filled';

  /**
   * @Output onClick: EventEmitter<Event>
   */
  @Output('onClick') onClick: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * public isImage: boolean | undefined | null = undefined
   */
  public image!: boolean | null;

  /**
   * public isImage: string | undefined = undefined
   */
  public imageSlot!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonBinding = (this.button) ? true : null;
    this.layoutBinding = (this.layout) ? true : null;
    this.orientationBinding = this.orientation;
    this.typeBinding = this.type;
  }

  ngAfterContentInit(): void {
    this.image = (this.cardImage) ? true : null;
    
    if (this.image) {
      if (!this.cardImage.slot || this.cardImage.slot && this.cardImage.slot != 'start' && this.cardImage.slot != 'end')
        this.cardImage.slot = 'start';

      this.imageSlot = this.cardImage.slot;
    }
  }

}
