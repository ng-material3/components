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
  selector: 'md3-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnChanges, OnInit {
  /**
   * @HostBinding colorBinding: string | undefined = undefined
   */
  @HostBinding('attr.color') colorBinding!: string;
 
  /**
   * @HostBinding disabledBinding: boolean | null
   */
  @HostBinding('attr.disabled') disabledBinding!: boolean | null;
 
  /**
   * @HostBinding typeBinding: string | undefined = undefined
   */
  @HostBinding('attr.type') typeBinding!: string;

  /**
   * @HostListener onClickListener(event: Event): void
   */
  @HostListener('click', ['$event']) onClickListener(event: Event): void {
    event.stopPropagation();
    
    if (!this.disabled)
      this.onClick.emit(event);
  }

  /**
   * @Input color: 'primary' | 'secondary' | 'tertiary' = 'primary'
   */
  @Input('color') color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * @Input disabled: boolean | undefined = undefined
   */
  @Input('disabled') disabled!: boolean;

  /**
   * @Input type: 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text' = 'filled'
   */
  @Input('type') type: 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text' = 'filled';

  /**
   * @Output onClick: EventEmitter<Event>
   */
  @Output('onClick') onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnChanges(_changes: SimpleChanges): void {
    if (_changes['disabled'])
      this.disabledBinding = (this.disabled) ? true : null;
  }

  ngOnInit(): void {
    this.colorBinding = this.color;
    this.typeBinding = this.type;
  }

}
