import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHomepage from './reducers';

export const selectHomepageState = createFeatureSelector<fromHomepage.State>(
  fromHomepage.homepageKey
);

export const selectGuests = createSelector(
  selectHomepageState,
  (state) => state
);
