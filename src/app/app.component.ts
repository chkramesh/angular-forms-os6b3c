import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  disableTextbox =  false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [{ value: 'a', disabled: true }],
      street: [''],
      zip: [''],
    });
  }

  ngOnInit() {
    this.form.patchValue({
      name: 'name',
      lastName: 'Last Name'
    });

    // this.form.disable();
  }

  update() {
    console.log(this.form.value);

    this.disableTextbox = !this.disableTextbox;
    // this.disableTextbox = true;;
  }

}
