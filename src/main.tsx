import App from '@/app';
import '@/mocks';
import store from '@/stores';
import { StyleProvider } from 'antd-style';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleProvider speedy prefix="css">
        <App />
      </StyleProvider>
    </Provider>
  </React.StrictMode>,
);
