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
  selector: 'md3-radio-button',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-radio-button'
  }
})
export class RadioComponent implements OnChanges, OnInit {
  /**
   * @HostBinding checkedBinding: boolean = false
   */
  @HostBinding('class.md3-radio-button--checked') checkedBinding: boolean = false;
 
  /**
   * @HostBinding disabledBinding: boolean | null | undefined = undefined
   */
  @HostBinding('attr.disabled') disabledBinding!: boolean | null;

  /**
   * @HostListener onClickListener(event: Event): void
   */
  @HostListener('click', ['$event']) onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.checked)
      return;
    
    if (!this.disabled)
      this.onChange.emit(null);
  }
  
  /**
   * @Input direction: 'start' | 'end' | undefined = undefined
   */
  @Input('direction') direction!: 'start' | 'end';

  /**
   * @Input disabled: boolean | undefined = undefined
   */
  @Input('disabled') disabled!: boolean;

  /**
   * @Input id: string | undefined = undefined
   */
  @Input('id') id!: string;
  
  /**
   * @Input name: string | undefined = undefined
   */
  @Input('name') name!: string;

  /**
   * @Input value: string = ''
   */
  @Input('value') value: string = '';
  
  /**
   * public checked: boolean = false
   */
  public checked: boolean = false;

  /**
   * public onChange: EventEmitter<any> = new EventEmitter<any>()
   */
  public onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled'])
      this.disabledBinding = this.disabled;
  }

  ngOnInit(): void {
    this.checkedBinding = (this.checked) ? true : false;
  }

  public check(_value: boolean): void {
    this.checked = _value;
    this.checkedBinding = this.checked;
  }

}
