import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import films from '../../mocks/films.js';
import genres from "../../mocks/genres";

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      films={films}
      genres={genres}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
