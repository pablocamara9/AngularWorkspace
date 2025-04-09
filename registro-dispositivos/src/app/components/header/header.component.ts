import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  imgUrl = 'https://media.licdn.com/dms/image/v2/C4D0BAQHmp1p6nVm1jw/company-logo_200_200/company-logo_200_200/0/1630571372859/noxium_logo?e=2147483647&v=beta&t=lW5nzTawrAZQ3gNg8BYiDmnLUfAhW-xi0w5HY4tiX70';

  salir() {
    this.router.navigate(['/login']);
  }

}
