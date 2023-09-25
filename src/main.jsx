import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ModernRedux } from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ReduxToolKit /> */}
      {/* <ReduxCore /> */}
      <ModernRedux />
    </Provider>
  </React.StrictMode>,
)
