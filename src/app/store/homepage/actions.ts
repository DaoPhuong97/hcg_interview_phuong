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

export const searchRepository = createAction(
  'searchRepository',
  props<{ value: string }>()
);
export const searchRepositorySuccess = createAction(
  'searchRepositorySuccess',
  props<{ payload: any }>()
);
export const searchRepositoryFailure = createAction(
  'searchRepositoryFailure',
  props<{ error: any }>()
);

export const loadMoreSearchResult = createAction('loadMoreSearchResult');
export const loadMoreSearchResultSuccess = createAction(
  'loadMoreSearchResultSuccess',
  props<{ payload: any }>()
);
export const loadMoreSearchResultFailure = createAction(
  'loadMoreSearchResultFailure',
  props<{ error: any }>()
);
