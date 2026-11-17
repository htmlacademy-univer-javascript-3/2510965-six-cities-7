import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { City, Offer } from '../types/offer';
import { changeCity, fillOffers } from './action';

type State = {
  city: City;
  offers: Offer[];
};

const initialState: State = {
  city: DEFAULT_CITY,
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});
