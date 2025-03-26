import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card-v3',
  standalone: false,
  templateUrl: './product-card-v3.component.html',
  styleUrl: './product-card-v3.component.scss'
})
export class ProductCardV3Component {

  product = {
    image: 'https://cdn1.jysk.com/getimage/wd3.large/235701',
    name: 'Incredible Rubber Sausages',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    uniAvailable: 0
  }

  productImgStyle = {
    filter: 'sepia(0)'
  }

  buyProduct() {
    //console.log('Compraremos un producto')
    alert('Compraremos un producto.')
  }

  addToCart() {
    //console.log('Compraremos un producto')
    alert('Agregaremos un producto al carrito de compras.')
  }

  onMouseEnter() {
    console.log('mouse enter');
    this.productImgStyle = {...this.productImgStyle, filter: 'sepia(0.3)'}
    
  }

  onMouseLeave() {
    console.log('mouse leave');
    this.productImgStyle = {...this.productImgStyle, filter: 'sepia(0)'}
  }

}
