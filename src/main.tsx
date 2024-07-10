import App from '@/app';
import NProgressBar from '@/components/progress-bar';
import '@/mocks';
import store from '@/stores';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NProgressBar />
      <App />
    </Provider>
  </React.StrictMode>,
);
