import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHomepage from './reducers';

export const selectHomepageState = createFeatureSelector<fromHomepage.State>(
  fromHomepage.homepageKey
);

export const selectState = createSelector(
  selectHomepageState,
  (state) => state
);

export const selectSearchResult = createSelector(
  selectHomepageState,
  (state) => state.items
);

export const selectCurrentPage = createSelector(
  selectHomepageState,
  (state) => state.page
);
