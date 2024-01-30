import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'Container',
  templateUrl: './Container.component.html',
  styleUrls: ['./Container.component.css']
})
export class ContainerComponent {

  /*
  data binding  {logic Ui ---> html}

  product declare

  Name:string ='Iphone';
  price:number = 655;
  color:string = 'Mate-black';
  DiscountedPrice:number = 767;

  listOfString:string[] =['mark','stave','marry','Ayush','Arjun']

  addToCart:number=0;
  product = {
    Name:'Iphone',
    price:655,
    color:'Mate-Black',
    discount:8.5,
    instock:5,
    pImage:'../../assets/images/phone.png',
  }
  getDiscountedPrice(){
    return this.product.price-(this.product.price * this.product.discount / 100)
  }
  decreament(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }
  increament(){
      if(this.addToCart < this.product.instock){
        this.addToCart++;
      }
  }*/

   @ViewChild(ProductListComponent)
    ProductListComponent:ProductListComponent


    
   searchText:string = '';

   setSearchText(event:string){
      this.searchText = event;
   }
}

