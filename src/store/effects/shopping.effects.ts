import { Injectable, NgZone } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadShoppingAction, ShoppingActionTypes, LoadShoppingSuccessAction, LoadShoppingFailureAction, AddItemAction, AddItemSuccessAction, AddItemFailureAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction } from '../actions/shopping.actions'
import { of } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class ShoppingEffects {


    constructor(
        private actions$: Actions,
        private shoppingService: ShoppingService,
        private _messageService: MessageService,
        private _ngZone: NgZone
    ) { }
    //listing the actions(loadshopping)
    @Effect() loadShopping$ = this.actions$
        .pipe(
            ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
            mergeMap(
                () => this.shoppingService.getShoppingItems()
                    .pipe(
                        map(data => {
                            return new LoadShoppingSuccessAction(data)
                        }),
                        catchError(error => of(new LoadShoppingFailureAction(error)))
                    )
            ),
        )

    //listing the actions(add shopping)
    @Effect() addShoppingItem$ = this.actions$
        .pipe(
            //now finding which action type
            ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
            mergeMap(
                (data) => this.shoppingService.addShoppingItem(data.payload)
                    .pipe(
                        map(() => new AddItemSuccessAction(data.payload),

                            this._messageService.add({
                                key: '1',
                                severity: "success",
                                summary: "Added successfully",
                            })

                        ),
                        catchError(error => of(new AddItemFailureAction(error),
                            this._messageService.add({
                                key: '2',
                                severity: "error",
                                summary: "Fail to load",
                            })
                        )
                        )
                    )
            )
        )

    //listing the actions(delete shopping)
    @Effect() deleteShoppingItem$ = this.actions$
        .pipe(
            ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
            mergeMap(
                (data) => this.shoppingService.deleteShoppingItem(data.payload)
                    .pipe(
                        map(() => new DeleteItemSuccessAction(data.payload),
                            this._messageService.add({
                                key: '3',
                                severity: "warn",
                                summary: "Deleted successfully",
                            })
                        ),
                        catchError(error => of(new DeleteItemFailureAction(error)))
                    )
            )
        )

}