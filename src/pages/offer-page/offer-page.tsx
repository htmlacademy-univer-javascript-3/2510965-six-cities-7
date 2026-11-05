import { Link, useParams } from 'react-router-dom';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offer-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import NotFoundPage from '../not-found-page/not-found-page';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type OfferPageProps = {
  offers: Offer[];
  reviews: Review[];
};

const MAX_RATING = 5;
const MAX_GALLERY_IMAGES = 6;
const MAX_NEAR_OFFERS = 3;

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function OfferPage({ offers, reviews }: OfferPageProps) {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  const offerReviews = reviews.filter((review) => review.offerId === offer.id);
  // Пока берём тестовые данные: другие предложения из моков.
  // В будущем список «неподалёку» будет приходить с сервера.
  const nearOffers = offers.filter((item) => item.id !== offer.id).slice(0, MAX_NEAR_OFFERS);
  const ratingWidth = `${(Math.round(offer.rating) / MAX_RATING) * 100}%`;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.slice(0, MAX_GALLERY_IMAGES).map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button
                  className={`offer__bookmark-button button${offer.isFavorite ? ' offer__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: ratingWidth }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(offer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} {offer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} {offer.maxAdults === 1 ? 'adult' : 'adults'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper${offer.host.isPro ? ' offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  {offer.description.map((paragraph) => (
                    <p className="offer__text" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList reviews={offerReviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map city={offer.city} offers={nearOffers} className="offer__map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={nearOffers} variant="near-places" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
