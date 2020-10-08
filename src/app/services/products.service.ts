import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuLabels } from './menu.model';
import { map } from 'rxjs/operators';
import { Post } from '../menu/post.model';

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    constructor(private http: HttpClient) {}

    // Add product via firebase
    addProduct(menuLabels: MenuLabels) {
        this.http.post('https://ng-http-2b26c.firebaseio.com/menu.json', menuLabels)
        .subscribe(response => {
            console.log(response);
          });
    }

    getProducts() {
        return this.http.get<{ [key: string ]: Post }>(
            'https://ng-http-2b26c.firebaseio.com/menu.json')
            .pipe(
                map(responseData => {
                  const data: Post[] = [];
                  for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                      // {...responseData[key], id: key}
                      // this is for add a new object
                      // the , id: key is if we want to grab all the key and delete or move
                      data.push({...responseData[key], id: key});
                    }
                  }
                  return data;
                }));
    }
}
