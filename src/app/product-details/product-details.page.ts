import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products = []
  selectedProduct = null

  constructor(private productsService: ProductsService ,private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get("productId")
    this.selectedProduct = this.productsService.products.getValue().filter(product => {
      return product.id === parseInt(productId)
    })[0]
  }

}
