import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FloatingActionButtonComponent implements OnChanges, OnInit {
  /**
   * @HostBinding colorBinding: 'primary' | 'secondary' | 'tertiary' | undefined = undefined
   */
  @HostBinding('attr.color') colorBinding!: 'primary' | 'secondary' | 'tertiary';
 
  /**
   * @HostBinding extendedBinding: string | null | undefined = undefined
   */
  @HostBinding('class.md3-floating-action-button--extended') extendedBinding!: boolean | null;
 
  /**
   * @HostBinding extendableBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.extendable') extendableBinding!: boolean | null;
 
  /**
   * @HostBinding sizeBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size') sizeBinding!: string | null;
 
  /**
   * @HostBinding typeBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.type') typeBinding!: string;

  /**
   * @HostListener onClickListener(_event: Event): void
   */
  @HostListener('click', ['$event']) onClickListener(_event: Event): void {
    _event.stopPropagation();
    this.onClick.emit(_event);
  }

  /**
   * @Input color: 'primary' | 'secondary' | 'tertiary' = 'primary'
   */
  @Input('color') color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  
  /**
   * @Input extendable: boolean | undefined = undefined
   */
  @Input('extendable') extendable!: boolean;
  
  /**
   * @Input extended: boolean | undefined = undefined
   */
  @Input('extended') extended!: boolean;

  /**
   * @Input size: 'small' | 'medium' | 'large' | undefined = undefined
   */
  @Input('size') size!: string;

  /**
   * @Input type: 'filled' | 'filled-tonal' | 'text' = 'filled'
   */
  @Input('type') type: 'filled' | 'filled-tonal' | 'text' = 'filled';

  /**
   * @Output click event
   * -emitted on host click
   */
  @Output('onClick') onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnChanges(_changes: SimpleChanges): void {
    if (_changes['extended'])
      this.extendedBinding = this.extended;
  }

  ngOnInit(): void {
    this.colorBinding = this.color;
    this.extendableBinding = (this.extendable) ? true : null;
    if (this.extendable) {
      this.extendableBinding = true;
      this.extendedBinding = this.extended;
    }

    this.sizeBinding = (this.size) ? this.size : null;
    this.typeBinding = this.type;
  }

}
