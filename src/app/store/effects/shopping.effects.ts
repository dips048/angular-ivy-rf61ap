import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  AddItemAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemFailureAction,
  DeleteItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingActionTypes
} from "../actions/shopping.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { ShoppingService } from "../../shopping.service";

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppinService: ShoppingService
  ) {}

  loadShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(() =>
        this.shoppinService.getShoppingItem().pipe(
          map(data => new LoadShoppingSuccessAction(data)),
          catchError(error => of(new LoadShoppingFailureAction(error)))
        )
      )
    )
  );

  addShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(data =>
        this.shoppinService.addShoppingItem(data.payload).pipe(
          map(() => new AddItemSuccessAction(data.payload)),
          catchError(error => of(new LoadShoppingFailureAction(error)))
        )
      )
    )
  );

  deleteShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(data =>
        this.shoppinService.deleteShoppingItem(data.payload).pipe(
          map(() => new DeleteItemSuccessAction(data.payload)),
          catchError(error => of(new DeleteItemFailureAction(error)))
        )
      )
    )
  );
}
