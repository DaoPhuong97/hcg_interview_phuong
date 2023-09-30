import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HomepageActions from './actions';
import { HomepageService } from 'src/app/homepage.service';
// import { GuestsService } from '../guests.service';

@Injectable()
export class HomepageEffects {
  searchRepoitoryData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomepageActions.searchRepository),
      switchMap((props) =>
        this.homepageService.searchRepository(props.value).pipe(
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

  constructor(
    private actions$: Actions,
    private homepageService: HomepageService
  ) {}
}
