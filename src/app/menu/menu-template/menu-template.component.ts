import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.scss']
})
export class MenuTemplateComponent implements OnInit {

  constructor() { }

  categorias = [{ name: 'comidas', link: '/app-comidas' },
                { name: 'bebidas', link: '/app-bebidas' },
                { name: 'postres', link: '/app-postres' }];
  ngOnInit() {
  }

}
