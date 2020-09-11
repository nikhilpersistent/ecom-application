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
    return this.http.get<ShoppingItem[]>(this.base_url);
  }

  /* add shopping item */
  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.base_url, shoppingItem)
  }

  /* delete shopping item */
  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.base_url}/${id}`)
  }

}
