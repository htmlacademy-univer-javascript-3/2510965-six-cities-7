import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';

export const changeCity = createAction<City>('city/change');
export const fillOffers = createAction<Offer[]>('offers/fill');
