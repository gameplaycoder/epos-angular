import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Product {
  id: string;
  category: string;
  count: number;
  name: string;
  description: string;
  price: number;
  barcode: string;
  image: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '/api/products'; // using the proxy

  constructor(private http: HttpClient) { }

  async getProducts(): Promise<Product[]> {
    return await firstValueFrom(this.http.get<Product[]>(this.apiUrl));
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return await firstValueFrom(this.http.get<Product[]>(`${this.apiUrl}?category=${categoryId}`));
  }
}
