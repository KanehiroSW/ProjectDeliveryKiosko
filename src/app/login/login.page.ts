import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectChangeEventDetail } from '@ionic/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  selectedRole: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onRoleChange(event: CustomEvent<SelectChangeEventDetail>) {
    this.selectedRole = event.detail.value;
  }
  
  onLogin() {
    if (this.selectedRole === 'tienda') {
      this.router.navigateByUrl('/tabs/tab1');
    } else if (this.selectedRole === 'repartidor') {
      this.router.navigateByUrl('/order-deliman');
    } else {
    }
  }
}
