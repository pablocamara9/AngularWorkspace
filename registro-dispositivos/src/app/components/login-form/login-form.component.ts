import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

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

  /*token = this.getParameterByName('token'); // Function from previous responses
  csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
  csrfToken = this.csrfTokenMeta ? this.csrfTokenMeta.getAttribute('content') : null;*/

  constructor(private router: Router, private authService: AuthService) { }

  validarFormulario() {
    if (this.email === '' || this.password === '') {
      Swal.fire({
        title: 'Error',
        text: 'Introduce un email y una contraseña',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#212529'
      })
    } else {
      //console.log(this.authService.getTokenFromUrl());
      this.authService.login(this.email, this.password)

      //console.log(this.getToken(this.email, this.password));
      //this.router.navigate(['/devices']);
    }
  }

  // In your external page JavaScript
  /*getToken(email: string, password: string) {    
    fetch('https://e-sda.noxium.es/admin-api/generate-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })

    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Token:', data.token);
          // Store the token securely (e.g., in memory)
          // Use the token for subsequent requests
        } else {
          console.error('Error getting token:', data.message);
          // Display an error message to the user
        }
      })
      .catch(error => {
        console.error('Error getting token:', error);
        // Display an error message to the user
      });
  }*/

  /*getParameterByName(name: string, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }*/

    
}
