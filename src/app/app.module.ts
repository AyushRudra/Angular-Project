import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './Container/Container.component';
import { SearchComponent } from './Container/search/search.component';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './Container/product-list/product-list.component';
import { ProductComponent } from './Container/product-list/product/product.component';
import { FilterComponent } from './Container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './Container/product-details/product-details.component'
 //this is third party so not declare in NgModule decelaration


 // FormModule inner NgModule so used FormModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
