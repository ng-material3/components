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

export const MD3_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'md3-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-checkbox'
  },
  providers: [
    MD3_CHECKBOX_CONTROL_VALUE_ACCESSOR
  ]
})
export class CheckboxComponent implements ControlValueAccessor, OnChanges, OnInit {
  /**
   * @HostBinding checkedBinding: boolean = false
   */
  @HostBinding('class.md3-checkbox--checked') checkedBinding: boolean = false;
 
  /**
   * @HostBinding disabledBinding: boolean | null | undefined = undefined
   */
  @HostBinding('attr.disabled') disabledBinding!: boolean | null;

  /**
   * DOM Event, onClick
   */
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();

    if (!this.disabled) {
      this.checked = !(this.checked);
      this.checkedBinding = this.checked;
      this.onChangeNgModelValue(this.checked);
      this.onChange.emit(this.checked);
    }
  }

  /**
   * @Input checked: boolean | undefined = undefined
   */
  @Input('checked') checked!: boolean;

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
   * @Output onChange: EventEmitter<boolean>
   */
  @Output('onChange') readonly onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  ngOnChanges(_changes: SimpleChanges): void {
    if (_changes['disabled'])
      this.disabledBinding = (this.disabled) ? true : null;
  }

  ngOnInit(): void {
    this.checkedBinding = (this.checked) ? true : false;
  }
  
}
