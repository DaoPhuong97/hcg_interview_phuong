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

export const loadMoreSearchResult = createAction(
  'loadMoreSearchResult',
  props<{ page: number; searchTerm: string }>()
);
export const loadMoreSearchResultSuccess = createAction(
  'loadMoreSearchResultSuccess',
  props<{ payload: any }>()
);
export const loadMoreSearchResultFailure = createAction(
  'loadMoreSearchResultFailure',
  props<{ error: any }>()
);

export const updateAdvancedFilter = createAction(
  'updateAdvancedFilter',
  props<{ filter: any }>()
);
export const onToggleFilter = createAction('onToggleFilter');
