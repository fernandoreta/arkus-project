import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/products.service';
import { MenuLabels } from '../services/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService) { }

  menu = false;
  addProduct = false;
  
  @ViewChild('f', {static: true}) productForm: NgForm;

  public showMenu() {
    this.menu = true;
    this.addProduct = false;
  }

  public showAddProduct() {
    this.addProduct = true;
    this.menu = false;
  }

  submitForm(productForm: MenuLabels) {
    this.productService.addProduct(productForm);
  }

  ngOnInit() {
  }

}
