import { Injectable } from "@angular/core";
import { Actions,Effect,ofType } from "@ngrx/effects";
import { ShoppingService } from 'src/app/services/shopping.service';
import { LoadShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
//effect is service...

@Injectable()
export class ShoppingEffects {
    @Effect() loadShopping$ = this.actions$
    .pipe(
        ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
        mergeMap(
            ()=>this._shoppingService.getShoppingItems
            
        )

    )
    constructor(private actions$:Actions,private _shoppingService:ShoppingService){

    }
}