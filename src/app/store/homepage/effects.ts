import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HomepageActions from './actions';
import { HomepageService } from 'src/app/homepage.service';
// import { GuestsService } from '../guests.service';

@Injectable()
export class HomepageEffects {
  loadHomepageData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomepageActions.loadHomepage),
      switchMap(() =>
        this.homepageService.loadHomepageData().pipe(
          map((response) =>
            HomepageActions.loadHomepageSuccess({ response: [] })
          ),
          catchError((error) =>
            of(HomepageActions.loadHomepageFailure({ error }))
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
