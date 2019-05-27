import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';


it(`GenreList screen renders correctly`, () => {
  const mocks = {
    genre: `All genres`,
    functionHandler: jest.fn()
  };

  const component = renderer.create(
      <GenreList
        activeGenre={mocks.genre}
        onGenreClick={mocks.functionHandler}
      />
  ).toJSON();

  expect(component).toMatchSnapshot();
});

