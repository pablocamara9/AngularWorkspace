import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: false,
  templateUrl: './link.component.html',
  styles: [
    `.link {color: cyan}`,
    `.link:hover {color: blue}`
  ]
})
export class LinkComponent {

}
