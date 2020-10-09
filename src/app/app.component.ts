import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor() {}
  title = 'practice-http';

  tabPanel = [{name: 'AGREGAR', link: '/app-menu'},
              {name: 'INVENTARIO', link: '/app-inventario'},
              {name: 'VENTAS', link: '/app-ventas'}];

  
  ngOnInit() {
  }
}
