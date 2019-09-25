import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedItems = [];
  total = 0;

  constructor(private router: Router, private productsService: ProductsService, private route: ActivatedRoute) {
    let items = this.productsService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
    console.log(this.selectedItems)

  }

  onClickTrash() {
    this.productsService.remove(this.selectedItems)
  }

  confirm(){
    this.router.navigate(['/tabs/tab1']);
  }
}
