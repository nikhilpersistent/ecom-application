import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from 'src/store/models/app.state.model';
import { Observable } from 'rxjs';
import ShoppingItem from 'src/store/models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems$: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);
  }

}
