import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  items=[];

  constructor() { }

  addToCart(product, size) {
    if(localStorage.getItem('basket')){
      this.items = JSON.parse(localStorage.getItem('basket'))
    }
    this.items.push([product,size]);
    
    localStorage.setItem('basket', JSON.stringify(this.items))
  }

  removeFromCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
