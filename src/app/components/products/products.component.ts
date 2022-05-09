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
  constructor(private title: Title, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.title.setTitle('Our Products...')

    // sync
    // this.products = this.productsService.getAllProducts()

    // Async 1 - callbacks
    // this.productsService.getAllProductsTimeOut((data:any)=>{
    //   this.products = data
    // },()=>{
    //   console.log('error')
    // })

    // Async 2 - Promise
    // this.productsService.getAllProductsPromise()
    //   .then(products => {
    //     this.products = products
    //   }).catch((reject) => {
    //     console.log(reject);
    //   })

    // Async 3 - Observable
    // this.productsService.getAllProductsObservable()
    //   .subscribe(products => {
    //     this.products = products
    //   }).closed


    // Async Server
    // this.productsService.getAllProductsServer((data:any)=>{
    //   this.products = data
    // },()=>{
    //   console.log('error')
    // })

    // Async Server - Observable
    this.productsService.getAllProductsSrvObservable()
      .subscribe(products => {
        this.products = products
      }).closed

  }

}
