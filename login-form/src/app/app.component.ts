import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ HeaderComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-form';
}
