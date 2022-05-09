import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
  RadioComponent
} from './radio.component';

export const MD3_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'md3-radio-group',
  templateUrl: './radio-group.component.html',
  providers: [
    MD3_RADIO_GROUP_CONTROL_VALUE_ACCESSOR
  ],
  host: {
    class: 'md3-radio-group'
  }
})
export class RadioGroupComponent implements AfterContentInit, ControlValueAccessor, OnInit {
  /**
   * @ContentChildren RadioComponent radioButtons!: QueryList<RadioComponent> | undefined = undefined
   */
  @ContentChildren(RadioComponent, { read: RadioComponent }) radioButtons!: QueryList<RadioComponent>;

  /**
   * @Input value: string | undefined = undefined
   */
  @Input('value') value!: string;

  /**
   * @Output onChange: EventEmitter<string> = new EventEmitter<string>()
   */
  @Output('onChange') readonly onChange: EventEmitter<string> = new EventEmitter<string>();

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
  public set ngModelValue(value: string) {
    console.log(value)
    if (value !== this.value) {
      this.value = value;
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
   * public writeValue(value: string)
   */
  public writeValue(value: string) {
    if (value && value !== this.value) {
      this.value = value;
      this.radioButtons.forEach(radioButton => {
        if (this.value && this.value == radioButton.value)
          this.sync(radioButton);
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.radioButtons.forEach(radioButton => {
      if (this.value && this.value == radioButton.value)
        this.sync(radioButton);

      radioButton.onChange.subscribe((_change: string) => {
        this.dynamize(radioButton);
      });
    });
  }

  private dynamize(_radioComponent: RadioComponent): void { 
    this.radioButtons.forEach(radioButton => {
      if (radioButton == _radioComponent) {
        this.sync(radioButton);
        this.onChange.emit(radioButton.value);
      } else if (radioButton.checked) {
        radioButton.check(false);
      }
    });
  }

  private sync(radioButton: RadioComponent): void {
    this.value = radioButton.value;
    this.onChangeNgModelValue(this.value);
    radioButton.check(true);
  }

}
