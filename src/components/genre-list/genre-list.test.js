import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';


it(`GenreList screen renders correctly`, () => {
  const mocks = {
    genres: [
      `All genres`,
      `Comedies`,
      `Crime`,
      `Documentary`,
      `Dramas`,
      `Horror`,
      `Kids & Family`,
      `Romance`,
      `Sci-Fi`,
      `Thrillers`
    ],
    activeGenre: `All genres`,
    functionHandler: jest.fn()
  };

  const component = renderer.create(
      <GenreList
        genres={mocks.genres}
        activeItem={mocks.activeGenre}
        onGenreClick={mocks.functionHandler}
      />
  ).toJSON();

  expect(component).toMatchSnapshot();
});

