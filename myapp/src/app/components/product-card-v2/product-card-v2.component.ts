import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-card-v2',
  standalone: false,
  templateUrl: './product-card-v2.component.html',
  styleUrl: './product-card-v2.component.scss'
})
export class ProductCardV2Component {

  product = {
    image: 'https://cdn1.jysk.com/getimage/wd3.large/235701',
    name: 'Incredible Rubber Sausages',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    uniAvailable: 0
  }

  productImgStyle = {
    opacity: '0.5',
    filter: 'sepia(0.3)'
  }

}
