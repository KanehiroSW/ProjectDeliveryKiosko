import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      dniPropietario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.dniPropietario, this.loginForm.value.password)
      .subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['/tabs/tab1']);
      }, error => {
        console.error('Login error', error);
      });
    }
  }
}