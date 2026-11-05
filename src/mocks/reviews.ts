import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 'r-0001',
    offerId: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    user: { name: 'Max', avatarUrl: '/img/avatar-max.jpg' },
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24T12:00:00.000Z',
  },
  {
    id: 'r-0002',
    offerId: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    user: { name: 'Angelina', avatarUrl: '/img/avatar-angelina.jpg' },
    rating: 5,
    comment: 'Beautiful place, very clean and in a great location. The host was friendly and helpful.',
    date: '2020-06-12T12:00:00.000Z',
  },
  {
    id: 'r-0003',
    offerId: 'b1c2d3e4-1111-4a2b-9c3d-0a1b2c3d4e01',
    user: { name: 'Max', avatarUrl: '/img/avatar-max.jpg' },
    rating: 3,
    comment: 'Comfortable room, but a bit noisy in the evening. Good value for the price.',
    date: '2021-09-03T12:00:00.000Z',
  },
];
