import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../menu/post.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss']
})
export class PostresComponent implements OnInit {

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
