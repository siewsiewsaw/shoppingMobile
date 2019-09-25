import { Component } from '@angular/core';
import { ProductsService } from "../products.service";
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products = []
  cart = [];
  items = [];
  
  constructor(private router: Router, private productsService: ProductsService, private actionSheetCtrl: ActionSheetController, private navCtrl: NavController) {
    this.cart = this.productsService.getCart();

    this.products = this.products.map(product => {
      product['qty'] = 0;
      return product;
    });
  }
   
  incrementQty(index: number) {
    this.products[index].qty += 1;
  }

  decrementQty(index: number) {
    if (this.products[index].qty > 0) {
    this.products[index].qty -= 1;
    }
  }

  ngOnInit(){
    this.productsService.products.subscribe(products => {
    this.products = products
    })
  }

    onNavigateToProduct(id){
      this.navCtrl.navigateForward("/products/" + id)
    }
  
    addToCart(productItem) {
      this.productsService.addProduct(productItem);
    }
   
    openCart() {
      this.router.navigate(['/tabs/tab3']);
    }
  }
