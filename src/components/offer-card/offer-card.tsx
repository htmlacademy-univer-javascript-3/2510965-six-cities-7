import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

export type CardVariant = 'cities' | 'favorites' | 'near-places';

type OfferCardProps = {
  offer: Offer;
  variant?: CardVariant;
  onMouseEnter?: (offerId: string) => void;
  onMouseLeave?: () => void;
};

const MAX_RATING = 5;

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function OfferCard({ offer, variant = 'cities', onMouseEnter, onMouseLeave }: OfferCardProps) {
  const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer;

  const isFavoritesVariant = variant === 'favorites';
  const imageWidth = isFavoritesVariant ? 150 : 260;
  const imageHeight = isFavoritesVariant ? 110 : 200;
  const ratingWidth = `${(Math.round(rating) / MAX_RATING) * 100}%`;
  const offerLink = `/offer/${id}`;

  return (
    <article
      className={`${variant}__card place-card`}
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={`${isFavoritesVariant ? 'favorites__card-info ' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
