import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { LoginRequest } from '../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginError:string="";

  loginForm=this.formBuilder.group({
    dniPropietario:['',Validators.required],
    password: ['',Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginService) {}

  ngOnInit(): void { }

  get dniPropietario(){ return this.loginForm.controls.dniPropietario; }
  get password(){ return this.loginForm.controls.password; }

  login() {
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError = "¡El DNI o la contraseña son incorrectos!";
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/tabs/tab1');
          this.loginForm.reset();
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}
