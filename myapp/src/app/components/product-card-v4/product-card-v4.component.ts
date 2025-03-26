import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card-v4',
  standalone: false,
  templateUrl: './product-card-v4.component.html',
  styleUrl: './product-card-v4.component.scss'
})
export class ProductCardV4Component {

  product = {
    image: 'https://cdn1.jysk.com/getimage/wd3.large/235701',
    name: 'Incredible Rubber Sausages',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    uniAvailable: 10
  }

  productImgStyle = {
    filter: 'sepia(0)'
  }

  formState = false
  address = ''
  postalCode = 0

  buyProduct() {
    //console.log('Compraremos un producto')
    alert('Compraremos un producto.')
    this.formState = true
  }

  orderProduct() {
    console.log(`Dirección de usuario: ${this.address}`);
    console.log(`Dirección de usuario: ${this.postalCode}`);
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
