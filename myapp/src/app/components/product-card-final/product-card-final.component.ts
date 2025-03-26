import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-final',
  standalone: false,
  templateUrl: './product-card-final.component.html',
  styleUrl: './product-card-final.component.scss'
})
export class ProductCardFinalComponent {

  @Input() product: any

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
