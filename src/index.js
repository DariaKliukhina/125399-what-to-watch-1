import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import history from "./history";
import reducer from "./reducer/index.js";
import {Router} from "react-router-dom";
import {Operation} from "./reducer/data/data";
import {createAPI} from "./api";
import App from './components/app/app.jsx';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

  store.dispatch(Operation.loadPromo());
  store.dispatch(Operation.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
