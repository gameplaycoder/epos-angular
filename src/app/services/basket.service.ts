import { Injectable } from '@angular/core';
import { Product } from './product.service'; // Assuming you have Product type

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: Product[] = [];

  constructor() {}

  addToBasket(product: Product) {
    this.basket.push(product);
    console.log('Basket:', this.basket); // For testing
  }

  getBasket(): Product[] {
    return this.basket;
  }

  getBasketCount(): number {
    return this.basket.length;
  }
  removeFromBasket(product: Product) {
    const index = this.basket.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.basket.splice(index, 1);
    }
  }
  clearBasket() {
    this.basket = [];
  }
}
