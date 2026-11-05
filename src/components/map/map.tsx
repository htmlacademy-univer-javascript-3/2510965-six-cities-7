import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offer[];
  className: string;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ city, offers, className }: MapProps) {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map === null) {
      return;
    }

    const markersLayer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          { icon: defaultMarkerIcon }
        )
        .addTo(markersLayer);
    });

    return () => {
      map.removeLayer(markersLayer);
    };
  }, [map, offers]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}

export default Map;
