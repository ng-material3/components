import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

export const MD3_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'md3-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [MD3_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor, OnChanges, OnInit {
  /**
   * @HostBinding checkedBinding: boolean = false
   */
  @HostBinding('class.md3-switch--checked') checkedBinding: boolean = false;
 
  /**
   * @HostBinding disabledBinding: boolean | null | undefined = undefined
   */
  @HostBinding('attr.disabled') disabledBinding!: boolean | null;

  /**
   * @HostListener onClickListener(event: Event): void
   */
  @HostListener('click', ['$event']) onClickListener(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedBinding = this.checked;
      this.onChangeNgModelValue(this.checked);
      this.onChange.emit(this.checked);
    }
  }

  /**
   * @Input checked: boolean = false
   */
  @Input('checked') checked: boolean = false;
  
  /**
   * @Input direction: 'start' | 'end' = null
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
   * @Output onChange: EventEmitter<boolean> = new EventEmitter<boolean>()
   */
  @Output('onChange') onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * private onChangeNgModelValue: any
   */
  private onChangeNgModelValue: any = () => {};

  /**
   * public get ngModelValue: boolean
   */
  public get ngModelValue(): boolean {
    return this.checked;
  };

  /**
   * public set ngModelValue
   */
  public set ngModelValue(value: boolean) {
    if (value !== this.checked) {
      this.checked = value;
      this.onChangeNgModelValue(value);
    }
  }

  /**
   * public registerOnChange(fn: any)
   */
  public registerOnChange(fn: any) {
    this.onChangeNgModelValue = (value: any) => fn(value);
  }

  /**
   * public registerOnTouched()
   */
  public registerOnTouched() {}

  /**
   * public writeValue(value: boolean)
   */
  public writeValue(value: boolean) {
    if (value && value !== this.checked) {
      this.checked = value;
      this.checkedBinding = this.checked;
      this.onChangeNgModelValue(this.checked);
    }
  }
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled'])
      this.disabledBinding = this.disabled;
  }

  ngOnInit(): void {
    this.checkedBinding = this.checked;
  }

}
