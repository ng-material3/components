import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

export const MD3_TEXT_FIELD_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextFieldComponent),
  multi: true
};

@Component({
  selector: 'md3-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [MD3_TEXT_FIELD_CONTROL_VALUE_ACCESSOR]
})
export class TextFieldComponent implements ControlValueAccessor, OnChanges, OnInit {
  /**
   * @HostBinding disabledBinding: boolean | null | undefined = undefined
   */
  @HostBinding('attr.disabled') disabledBinding!: boolean | null;

  /**
   * @HostBinding fullwidthBinding: boolean | null | undefined = undefined
   */
  @HostBinding('class.md3-text-field--full-width') fullwidthBinding!: boolean | null;

  /**
   * @HostBinding focusedBinding: boolean = false
   */
  @HostBinding('class.md3-text-field--focused') focusedBinding: boolean = false;

  /**
   * @HostBinding hasLabelBinding: boolean | null | undefined = undefined
   */
  @HostBinding('class.md3-text-field--has-label') hasLabelBinding!: boolean | null;

  /**
   * @HostBinding hasTextBinding: boolean | null | undefined = undefined
   */
  @HostBinding('class.md3-text-field--has-text') hasTextBinding!: boolean | null;

  /**
   * @HostListener onClickListener(event: Event): void
   */
  @HostListener('click', ['$event']) onClickListener(event: Event): void {
    event.stopPropagation();

    if (!this.disabled)
      this.inputRef.nativeElement.focus();
  }
  
  /**
   * @Input clearable: boolean | undefined = undefined
   */
  @Input('clearable') clearable!: boolean;

  /**
   * @Input disabled: boolean | undefined = undefined
   */
  @Input('disabled') disabled!: boolean;

  /**
   * @Input fullwidth: boolean | undefined = undefined
   */
  @Input('fullwidth') fullwidth!: boolean;

  /**
   * @Input id: string | undefined = undefined
   */
  @Input('id') id!: string;
  
  /**
   * @Input label: string | undefined = undefined
   */
  @Input('label') label!: string;
  
  /**
   * @Input name: string | undefined = undefined
   */
  @Input('name') name!: string;

  /**
   * @Input placeholder: string | undefined = undefined
   */
  @Input('placeholder') placeholder!: string;
  
  /**
   * @Input type: 'input' | 'textarea' = input
   */
  @Input('type') type: 'input' | 'textarea' = 'input';

  /**
   * @Input value: string | undefined = undefined
   */
  @Input('value') value!: string;

  /**
   * @Output onChange: EventEmitter<string> = new EventEmitter<string>()
   */
  @Output('onChange') readonly onChange: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * @ViewChild inputRef: ElementRef | undefined = undefined
   */
  @ViewChild('input', { static: false }) inputRef!: ElementRef;

  /**
   * private onChangeNgModelValue: any
   */
  private onChangeNgModelValue: any = () => {};

  /**
   * public get ngModelValue: string
   */
  public get ngModelValue(): string {
    return this.value;
  };

  /**
   * public set ngModelValue
   */
  public set ngModelValue(_value: string) {
    if (_value !== this.value) {
      this.value = _value;
      this.onChangeNgModelValue(_value);
    }
  }

  /**
   * public writeValue(_value: string)
   */
  public writeValue(_value: string) {
    if (_value && _value !== this.value) {
      this.value = _value;
      this.inputRef.nativeElement.value = this.value;
      this.dynamize();
    }
  }

  /**
   * public registerOnChange(fn: any)
   */
  public registerOnChange(fn: any) {
    this.onChangeNgModelValue = (_value: any) => fn(_value);
  }

  /**
   * public registerOnTouched()
   */
  public registerOnTouched() {}

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled'])
      this.disabledBinding = this.disabled;
  }

  ngOnInit(): void {
    if (this.value != null && this.value != '')
      this.focus();

    this.fullwidthBinding = (this.fullwidth) ? true : null;
    this.hasLabelBinding = (this.label) ? true : null;
    this.hasTextBinding = (this.value) ? true : null;
  }

  public clear(): void {
    if (!this.disabled) {
      this.inputRef.nativeElement.value = '';
      this.value = this.inputRef.nativeElement.value;
      this.onChangeNgModelValue(this.value);
      this.dynamize();
    }
  }

  public dynamize(): void {
    if (this.value != '' &&  !this.hasTextBinding) {
      this.hasTextBinding = true;
    } else if (this.value == '' && this.hasTextBinding) {
      this.hasTextBinding = false;
    }

    this.onChange.emit(this.value);
  }

  public focus(): void {
    this.focusedBinding = true;
  }

  public focusOut(): void {
    this.focusedBinding = false;
  }

  public _input(): void {
    this.value = this.inputRef.nativeElement.value;
    this.dynamize();
  }

}
