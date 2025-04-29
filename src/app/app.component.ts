import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service'; // Assuming you have it
import { Product, Category } from './services/product.service'; // Assuming you have types
import { BasketService } from './services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];    // <-- NEW
  searchTerm: string = '';
  selectedCategory: string = 'all';

  constructor(private productService: ProductService, public basketService:BasketService) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    this.categories = await this.productService.getCategories(); // <-- Load categories too
    this.filteredProducts = this.products;
  }
  filterByCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.onSearch(); // reuse existing search logic
  }
  increaseQuantity(product: Product) {
    this.basketService.increaseQuantity(product);
  }
  
  decreaseQuantity(product: Product) {
    this.basketService.decreaseQuantity(product);
  }
  getBasketTotal(): number {
    return this.basketService.getBasketTotal();
  }
  removeFromBasket(product: Product) {
    this.basketService.removeFromBasket(product);
  }

  clearBasket() {
    this.basketService.clearBasket();
  }
  viewBasket() {
    console.log('Viewing basket', this.basketService.getBasket());
    // Later: Open a side-panel or navigate to /basket page
  }
  proceedToCheckout() {
    const total = this.basketService.getBasketTotal();
    alert(`Proceeding to checkout...\n\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    this.basketService.clearBasket();
  }
  onSearch() {
    const search = this.searchTerm.toLowerCase();
  
    this.filteredProducts = this.products.filter(product => {
      const categoryName = this.getCategoryName(product.category).toLowerCase();
      const barcode = product.barcode?.toString().toLowerCase() || '';
  
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        categoryName.includes(search) ||
        barcode.includes(search);
  
      const matchesCategory =
        this.selectedCategory === 'all' || product.category === this.selectedCategory;
  
      return matchesSearch && matchesCategory;
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}
