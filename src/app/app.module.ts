import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './components/page404/page404.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ProductsService } from './services/products.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    Page404Component,
    ThumbnailComponent,
    ProductDetailsComponent,
    AddProductComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
