import { createAction, props } from '@ngrx/store';

export const loadHomepage = createAction('[Guest] Load Guests');

export const loadHomepageSuccess = createAction(
  '[Homepage] Load Homepage Success',
  props<{ response: any[] }>()
);

export const loadHomepageFailure = createAction(
  '[Homepage] Load Homepage Failure',
  props<{ error: any }>()
);
