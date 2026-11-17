import { City } from '../../types/offer';

type CityListProps = {
  cities: City[];
  currentCity: City;
  onCityChange: (city: City) => void;
};

function CityList({ cities, currentCity, onCityChange }: CityListProps) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <a
              className={`locations__item-link tabs__item${city.name === currentCity.name ? ' tabs__item--active' : ''}`}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city);
              }}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
