export type ReviewUser = {
  name: string;
  avatarUrl: string;
};

export type Review = {
  id: string;
  offerId: string;
  user: ReviewUser;
  rating: number;
  comment: string;
  date: string;
};
