import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const appData = {
  offersCount: 312,
  city: 'Amsterdam'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App data={appData} />
  </React.StrictMode>
);
