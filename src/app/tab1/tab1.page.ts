import { Component } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private productsService: ProductsService) {
  let total = this.productsService.getTotal();
  }
}
