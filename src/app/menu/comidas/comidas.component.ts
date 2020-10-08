import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})
export class ComidasComponent implements OnInit {

  constructor(private productService: ProductService) { }

  loadedFood = [];

  getProducts() {
    this.productService.getProducts().subscribe(fetch => {
      this.loadedFood = fetch;
    });
}

  ngOnInit() {
    this.getProducts();
  }

}
