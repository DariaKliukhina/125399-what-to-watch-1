import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';


it(`GenreList screen renders correctly`, () => {
  const genre = `Comedies`;

  const component = renderer.create(
      <GenreList
        genre={genre}
      />
  ).toJSON();

  expect(component).toMatchSnapshot();
});

