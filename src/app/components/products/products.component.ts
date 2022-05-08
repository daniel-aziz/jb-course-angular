import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  constructor(private title:Title, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.title.setTitle('Our Products...')
    this.products = this.productsService.getAllProducts()
    console.table(this.products)
  }

}
