import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route/private-route';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
};

function App({ offers, reviews }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        {/* Маршрут для Главной */}
        <Route path="/" element={<MainPage offers={offers} />} />

        {/* Маршрут для Логина */}
        <Route path="/login" element={<LoginPage />} />

        {/* Маршрут для Избранного (Защищён PrivateRoute) */}
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />

        {/* Маршрут для Оффера (с динамическим ID) */}
        <Route path="/offer/:id" element={<OfferPage offers={offers} reviews={reviews} />} />

        {/* Маршрут для 404 (catch-all) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
