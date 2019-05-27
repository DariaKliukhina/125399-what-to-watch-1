import React from 'react';
import renderer from 'react-test-renderer';
import films from '../../mocks/films.js';
import genres from "../../mocks/genres";
import {App} from './app.jsx';

const activeGenre = `All genres`;

describe(`App:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(
          <App
            films={films}
            genres={genres}
            activeGenre={activeGenre}
            onGenreClick={jest.fn()}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
