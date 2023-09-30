import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHomepage from './reducers';

export const selectHomepageState = createFeatureSelector<fromHomepage.State>(
  fromHomepage.homepageKey
);

const selector = (selectorFn: <T>(state: any) => T) =>
  createSelector(selectHomepageState, selectorFn);

export const selectState = selector((state) => state);

export const selectSearchResult = selector((state) => state.items);

export const selectCurrentPage = selector((state) => state.page);

export const selectFilter = selector((state) => state.filter);

export const selectIsUseFilter = selector((state) => state.isUseFilter);
