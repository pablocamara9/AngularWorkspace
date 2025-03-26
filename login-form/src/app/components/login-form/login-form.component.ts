import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  email = ''
  password = ''

  processForm() {
    console.log('Email: ' + this.email);
    console.log('Contraseña ' + this.password);
    
  }

}
