import { Injectable } from '@angular/core';
import { Product } from './product.service'; // Assuming you have Product type

export interface BasketItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: BasketItem[] = [];

  constructor() {}

  addToBasket(product: Product) {
    const item = this.basket.find(p => p.product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      this.basket.push({ product, quantity: 1 });
    }
  }

  getBasket(): BasketItem[] {
    return this.basket;
  }
  
  getBasketCount(): number {
    return this.basket.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  getBasketTotal(): number {
    return this.basket.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  removeFromBasket(product: Product): void {
    this.basket = this.basket.filter(item => item.product.id !== product.id);
  }
  clearBasket() {
    this.basket = [];
  }
  increaseQuantity(product: Product) {
    const item = this.basket.find(p => p.product.id === product.id);
    if (item) {
      item.quantity += 1;
    }
  }
  
  decreaseQuantity(product: Product) {
    const item = this.basket.find(p => p.product.id === product.id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.removeFromBasket(product);
      }
    }
  }
}
