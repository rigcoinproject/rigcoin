import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { SnackbarProvider } from 'notistack';

import App from './App';

ReactDOM.render(
  <HashRouter>
    <SnackbarProvider
      maxSnack={3}
      transitionDuration={{
        appear: 10000,
        enter: 500,
        exit: 500
      }}
    >
      <App />
    </SnackbarProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
