import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  validarFormulario() {
    if(this.email === '' || this.password === '') {
      alert('No puedes dejar campos vacíos. Por favor, rellénalos.');
    } else {
      this.router.navigate(['/devices']);
    }
  }

}
