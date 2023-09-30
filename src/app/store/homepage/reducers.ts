//Refer to https://medium.com/@vperviz/how-to-add-redux-with-ngrx-to-an-angular-app-60816244a375
import { Action, createReducer, on } from '@ngrx/store';
import * as HomepageActions from './actions';

export const homepageKey = 'homepage';
// 1. this is our state
export interface State {
  totalCount: number;
  searchTerm: string;
  items: any[];
  page: number;
  loading: boolean;
  displayFilter: boolean;
}

// we need to provide an initial state
export const initialState: State = {
  totalCount: 0,
  searchTerm: '',
  items: [],
  page: 1,
  loading: false,
  displayFilter: false,
};

// 2. reducer functions to manipulate the state
const homepageReducer = createReducer(
  initialState,

  on(HomepageActions.loadHomepageSuccess, (state, action) => {
    // state is immutable => we always create a new state
    return state;
  }),
  on(HomepageActions.loadHomepageFailure, (state, action) => {
    return { ...state };
  }),

  on(HomepageActions.searchRepositorySuccess, (state, action) => {
    const { items, searchTerm, total_count } = action.payload;

    return { ...state, items, searchTerm, totalCount: total_count };
  }),
  on(HomepageActions.searchRepositoryFailure, (state, action) => {
    return state;
  }),

  on(HomepageActions.loadMoreSearchResultSuccess, (state, action) => {
    const { items, page } = action.payload;
    return { ...state, page, items: [...state.items, ...items] };
  }),
  on(HomepageActions.loadHomepageFailure, (state, action) => {
    return { ...state };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return homepageReducer(state, action);
}
