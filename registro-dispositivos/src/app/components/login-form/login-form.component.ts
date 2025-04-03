import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Error',
        text: 'Introduce un email y una contraseña',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#212529'
      })
    } else {
      this.router.navigate(['/devices']);
    }
  }

}
