import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type OffersListVariant = 'cities' | 'near-places';

type OffersListProps = {
  offers: Offer[];
  variant?: OffersListVariant;
};

const LIST_CLASS_NAMES: Record<OffersListVariant, string> = {
  'cities': 'cities__places-list places__list tabs__content',
  'near-places': 'near-places__list places__list',
};

function OffersList({ offers, variant = 'cities' }: OffersListProps) {
  // id карточки, на которую сейчас наведён курсор
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className={LIST_CLASS_NAMES[variant]}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={setActiveOfferId}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
