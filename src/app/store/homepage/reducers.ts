//Refer to https://medium.com/@vperviz/how-to-add-redux-with-ngrx-to-an-angular-app-60816244a375
import { Action, createReducer, on } from '@ngrx/store';
import * as HomepageActions from './actions';

export const homepageKey = 'homepage';
// 1. this is our guest state (for GuestModule)
export interface State {}

// we need to provide an initial state
export const initialState: State = {};

// 2. reducer functions to manipulate the state
const guestReducer = createReducer(
  initialState,

  on(HomepageActions.loadHomepageSuccess, (state, action) => {
    // state is immutable => we always create a new state
    return state;
  }),
  on(HomepageActions.loadHomepageFailure, (state, action) => {
    return { ...state };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return guestReducer(state, action);
}
