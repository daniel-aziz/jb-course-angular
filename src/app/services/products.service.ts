import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getAllProducts(): Product[] {
    const arr: Product[] = [];
      arr.push(new Product(1, 'apple', 3, 100))
      arr.push(new Product(2, 'oranges', 4.5, 500))
      arr.push(new Product(3, 'wine', 65, 200))
    return arr;
  }
}
