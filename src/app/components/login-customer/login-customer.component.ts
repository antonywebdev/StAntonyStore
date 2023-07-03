import { Router } from '@angular/router';
import { customerService } from './../../service/api.customerService';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private customerservice: customerService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }
  mainForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log('datadatadatadatadata',this.loginForm.value);
      // this.customerservice.loginCustomer(this.loginForm.value).subscribe((data) => {
      //   console.log('logged successfully',data);
      // });
      this.customerservice.loginCustomer(this.loginForm.value)
      .subscribe((user) =>  console.log('logged successfully',user));
  }
}
