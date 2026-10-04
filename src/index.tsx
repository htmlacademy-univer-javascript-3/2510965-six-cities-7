import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app'; // Проверь путь, судя по структуре у тебя app/app.tsx

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App /> {/* Просто App, без пропсов */}
  </React.StrictMode>
);
