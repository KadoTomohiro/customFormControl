import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  private _value;

  disabled: boolean;
  @Input() type: string;

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  get value() {
    return this._value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = true;
  }
}
