//Refer to https://medium.com/@vperviz/how-to-add-redux-with-ngrx-to-an-angular-app-60816244a375
import { Action, createReducer, on } from '@ngrx/store';
import * as HomepageActions from './actions';

export const homepageKey = 'homepage';
// 1. this is our state
export interface State {
  searchTerm: string;
  items: any[];
  page: number;
  loading: boolean;
}

// we need to provide an initial state
export const initialState: State = {
  searchTerm: '',
  items: [],
  page: 0,
  loading: false,
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
    const { items, searchTerm } = action.payload;
    return { ...state, items, searchTerm };
  }),
  on(HomepageActions.searchRepositoryFailure, (state, action) => {
    return state;
  }),

  on(HomepageActions.loadHomepageSuccess, (state, action) => {
    return { ...state };
  }),
  on(HomepageActions.loadHomepageFailure, (state, action) => {
    return { ...state };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return homepageReducer(state, action);
}
