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
  props<{ value: string; filter: any }>()
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

export const onToggleAdvacnedFilter = createAction('onToggleAdvacnedFilter');

export const updateAdvancedFilter = createAction(
  'updateAdvancedFilter',
  props<{ key: string; value: string }>()
);

export const searchRepositoryWithFilter = createAction(
  'searchRepositoryWithFilter',
  props<{ filter: any }>()
);
export const searchRepositoryWithFilterSuccess = createAction(
  'searchRepositoryWithFilterSuccess',
  props<{ payload: any }>()
);
export const searchRepositoryWithFilterFailure = createAction(
  'searchRepositoryWithFilterFailure',
  props<{ error: any }>()
);
