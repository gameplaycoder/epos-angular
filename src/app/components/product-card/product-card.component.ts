import { Component, Input } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  constructor(private basketService: BasketService) {}

  addToBasket() {
    this.basketService.addToBasket(this.product);
  }
}
