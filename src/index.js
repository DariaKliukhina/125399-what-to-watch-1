import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

import films from './mocks/films';
import genres from './mocks/genres';

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App
          genres={genres}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
