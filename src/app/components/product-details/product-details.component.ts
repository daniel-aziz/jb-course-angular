import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product = new Product(0,"",0,0)

  constructor(private activatedRoute:ActivatedRoute, private productService: ProductsService) {

   }

  ngOnInit(): void {
 this.productService.getAllProductsObservable().subscribe(products => {
  let id = this.activatedRoute.snapshot.paramMap.get('id') + "";
  this.product = products.find(p => p.id === parseInt(id)) || new Product(0,"",0,0)
  
 })
  }

}
