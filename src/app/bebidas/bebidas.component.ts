import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../menu/post.model';
import { map } from 'rxjs/operators';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

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
