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
  imgUrl = 'https://media.licdn.com/dms/image/v2/C4D0BAQHmp1p6nVm1jw/company-logo_200_200/company-logo_200_200/0/1630571372859/noxium_logo?e=2147483647&v=beta&t=lW5nzTawrAZQ3gNg8BYiDmnLUfAhW-xi0w5HY4tiX70';

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
