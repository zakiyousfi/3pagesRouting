import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { RouterModule,Routes } from '@angular/router';
const R:Routes =[
  {path :'p', component:ProductsComponent},
  {path :'ap', component:AddproductComponent},
  {path :'**', component :NotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(R)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
