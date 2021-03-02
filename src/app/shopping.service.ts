import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ShoppingItem } from './store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingUrl="https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getShoppingItem(){
    return this.http.get<ShoppingItem[]>(this.shoppingUrl);
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    return this.http.post(this.shoppingUrl,shoppingItem);
  }

  deleteShoppingItem(id:string){
    return this.http.delete(`${this.shoppingUrl}/${id}`)
  }
}
