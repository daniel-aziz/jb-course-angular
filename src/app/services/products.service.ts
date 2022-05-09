import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, Observer } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Product[] {
    const arr: Product[] = [];
    arr.push(new Product(1, 'apple', 3, 100))
    arr.push(new Product(2, 'oranges', 4.5, 500))
    arr.push(new Product(3, 'wine', 65, 200))
    return arr;
  }

  public getAllProductsTimeOut(successCallback: any, failureCallback: any): void {
    setTimeout(() => {
      try {
        const arr: Product[] = [];
        arr.push(new Product(1, 'apple', 3, 100))
        arr.push(new Product(2, 'oranges', 4.5, 500))
        arr.push(new Product(3, 'wine', 65, 200))
        successCallback(arr)
      } catch (err) {
        failureCallback(err)
      }
    }, 1000)
  }

  public getAllProductsServer(successCallback: any, failureCallback: any): void {
    axios.get('http://localhost:8080/products').then(resulte => {
      successCallback(resulte.data)
    }).catch(err => {
      failureCallback(err)
    })
  }

  public getAllProductsPromise(): Promise<Product[]> {

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        try {
          const arr: Product[] = [];
          arr.push(new Product(1, 'apple', 3, 100))
          arr.push(new Product(2, 'oranges', 4.5, 500))
          arr.push(new Product(3, 'wine', 65, 200))
          resolve(arr)

        } catch (err) {
          reject(err)
        }

      }, 1000)

    })

  }

  public getAllProductsObservable(): Observable<Product[]> {
    return new Observable((observer:Observer<Product[]> )=> {
      setTimeout(() => {
        try {
          const arr: Product[] = [];
          arr.push(new Product(1, 'apple', 3, 100))
          arr.push(new Product(2, 'oranges', 4.5, 500))
          arr.push(new Product(3, 'wine', 65, 200))
          observer.next(arr)

        } catch (err) {
          observer.error(err)
        }

      }, 1000)
    })
  }

  getAllProductsSrvObservable() :Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/products')
  }
}
