import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service'; // Assuming you have it
import { Product, Category } from './services/product.service'; // Assuming you have types

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

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    this.categories = await this.productService.getCategories(); // <-- Load categories too
    this.filteredProducts = this.products;
  }

  onSearch() {
    const search = this.searchTerm.toLowerCase();
  
    this.filteredProducts = this.products.filter(product => {
      const productCategoryName = this.getCategoryName(product.category).toLowerCase();
      const productBarcode = product.barcode ? product.barcode.toString().toLowerCase() : '';
  
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        productCategoryName.includes(search) ||
        productBarcode.includes(search)
      );
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}
