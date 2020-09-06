import ShoppingItem from "../models/shopping-item.model";
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: "1123-43-23323",
        name: "Moto G-9"
    },
    {
        id: "1123-43-dewqvfr",
        name: "Moto G-34"
    }
]

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];

        default: return state;

    }
}
