import { Router } from '@angular/router';
import { customerService } from './../../service/api.customerService';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  submitted = false;
  customerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private customerservice: customerService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }
  clearForm() {
    this.customerForm.setValue({
      name: '',
      email: '',
      password: '',
      phoneNumber:'',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: ''
    });
  }
  get myForm() {
    return this.customerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return false;
    } else {
      return this.customerservice.createCustomer(this.customerForm.value).subscribe({
        complete: () => {
          console.log('Customer register successfully!');
          this.clearForm();
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
