import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() product = new Product()
  
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.product)
  }
}
