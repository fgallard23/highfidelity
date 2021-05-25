import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//theme
import {ThemeProvider} from "@material-ui/styles";
import Theme from "./theme/Theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={Theme}>
          <App/>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
