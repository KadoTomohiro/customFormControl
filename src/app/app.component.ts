import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: new FormControl('taro', [
        Validators.required
      ]),
      age: new FormControl(30, [
        Validators.required,
        Validators.min(20),
        Validators.pattern(/\d+/)
      ]),
      disabled: new FormControl({value: '', disabled: true})
    });
  }
}
