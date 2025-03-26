import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  product = {
    image: 'https://cdn1.jysk.com/getimage/wd3.large/235701',
    name: 'Incredible Rubber Sausages',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    uniAvailable: 10



  }

}