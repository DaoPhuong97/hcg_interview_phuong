import { createAction, props } from '@ngrx/store';

export const loadHomepage = createAction('[Homepage] Load Homepage');

export const loadHomepageSuccess = createAction(
  '[Homepage] Load Homepage Success',
  props<{ response: any[] }>()
);

export const loadHomepageFailure = createAction(
  '[Homepage] Load Homepage Failure',
  props<{ error: any }>()
);

export const searchRepository = createAction('searchRepository');
export const searchRepositorySuccess = createAction(
  'searchRepositorySuccess',
  props<{ response: any[] }>()
);
export const searchRepositoryFailure = createAction(
  'searchRepositoryFailure',
  props<{ error: any }>()
);
