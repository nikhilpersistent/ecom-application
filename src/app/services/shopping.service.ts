import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ShoppingItem from 'src/store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private base_url = "http://localhost:3000/shopping"

  constructor(private http: HttpClient) { }

  /* getting shopping data  */
  getShoppingItems() {
    this.http.get<ShoppingItem[]>(this.base_url);
  }

  
  addShoppingItem(shoppingItem:ShoppingItem) {
    this.http.post(this.base_url,shoppingItem)
  }

  deleteShoppingItem(id:string) {
    this.http.delete(`${this.base_url}/${id}`)
  }

}
