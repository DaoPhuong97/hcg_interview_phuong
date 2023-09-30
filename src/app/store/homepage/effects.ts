import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HomepageActions from './actions';
import { HomepageService } from 'src/app/homepage.service';
// import { GuestsService } from '../guests.service';

@Injectable()
export class HomepageEffects {
  searchRepositoryData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomepageActions.searchRepository),
      switchMap((props) =>
        this.homepageService
          .searchRepository({ searchTerm: props.value, page: 1 })
          .pipe(
            map((res) =>
              HomepageActions.searchRepositorySuccess({
                payload: { ...res, searchTerm: props.value },
              })
            ),
            catchError((error) =>
              of(HomepageActions.searchRepositoryFailure({ error }))
            )
          )
      )
    );
  });

  loadMoreRepositoryData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomepageActions.loadMoreSearchResult),
      switchMap((props) => {
        return this.homepageService
          .searchRepository({ page: props.page, searchTerm: props.searchTerm })
          .pipe(
            map((res) => {
              return HomepageActions.loadMoreSearchResultSuccess({
                payload: { ...res, page: props.page },
              });
            }),
            catchError((error) =>
              of(HomepageActions.searchRepositoryFailure({ error }))
            )
          );
      })
    );
  });

  // searchRepositoryWithFilterData$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(HomepageActions.searchRepositoryWithFilter),
  //     switchMap((props) =>
  //       this.homepageService.searchRepositoryByFilter(props).pipe(
  //         map((res) =>
  //           HomepageActions.searchRepositoryWithFilterSuccess({
  //             payload: res,
  //           })
  //         ),
  //         catchError((error) =>
  //           of(HomepageActions.searchRepositoryFailure({ error }))
  //         )
  //       )
  //     )
  //   );
  // });
  constructor(
    private actions$: Actions,
    private homepageService: HomepageService
  ) {}
}
