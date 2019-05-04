import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const filmsList = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`];
  ReactDOM.render(
      <App filmsList={filmsList}/>,
      document.querySelector(`#root`)
  );
};

init();
