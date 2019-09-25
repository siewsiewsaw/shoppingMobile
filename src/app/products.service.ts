import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = new BehaviorSubject([
    {
      id: 1,
      title: "Electrolux Bread Toaster",
      imageUrl: "/assets/BreadToaster.GIF",
      qty: 0,
      price: "119",
      ProductDetails: [
        "Warm up buns with the integrated bun-warmer",
        "Detachable crumb tray makes cleaning simple",
        "Cord Storage (base)",
        "Self-centering bread guides for evenly toasted bread."
      ]
    },
    {
      id: 2,
      title: "Colourful 4 tier lunch box",
      imageUrl: "/assets/lunchbox.GIF",
      qty: 0,
      price: "30",
      ProductDetails: [
        "Four tier and multi color lunch box ",
        "Fashion Design",
        "Exquisite design"
      ]
    },
    {
      id: 3,
      title: "Electric Mini Pot",
      imageUrl: "/assets/MiniPot.GIF",
      qty: 0,
      price: "60",
      ProductDetails: [
        "Multi-functional, cooking or steaming rice, heating dishes and soup, boiling eggs etc",
        "2L capacity",
        "Easy to use and operate",
        "Just one press for on or off",
        "Convenient for steaming and cooking at the same time"
      ]
    }
  ])

  private cart = [];
  private total = 0;

  constructor() { }
  remove(id){
    let currentProduct = this.products.getValue().filter((products) => {
      return products.id !== id
    })
    this.products.next(currentProduct)
  }

  
  getProducts() {
    return this.products;
  }
 
  getCart() {
    return this.cart;
  }
 
  getTotal() {
    return this.total;
  }
  addProduct(productItem) {
    this.cart.push(productItem);
  }
} 
