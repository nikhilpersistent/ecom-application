import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from 'src/store/models/app.state.model';
import { Observable } from 'rxjs';
import ShoppingItem from 'src/store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingItems$:Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
   this.shoppingItems$ = this.store.select(store=>store.shopping);
  }
}
