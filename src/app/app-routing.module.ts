import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { HomeComponent } from "./components/home/home.component";
import { Page404Component } from "./components/page404/page404.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductsComponent } from "./components/products/products.component";

const routes: Route[] = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product-details/:id', component: ProductDetailsComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: '', redirectTo: '/home', pathMatch:'full'}, 
    {path: '**', component: Page404Component},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}