import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from 'src/store/models/app.state.model';
import { v4 as uuid } from "uuid";
import { Observable } from 'rxjs';
import ShoppingItem from 'src/store/models/shopping-item.model';
import { AddItemAction, DeleteItemAction } from 'src/store/actions/shopping.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
  }

  addItem(): void {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }
  removeCard(id: string): void {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
