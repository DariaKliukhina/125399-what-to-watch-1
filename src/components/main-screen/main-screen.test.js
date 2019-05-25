import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen';
import films from '../../mocks/films';
import genres from '../../mocks/genres';

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      genres={genres}
      films={films}
      activeGenre={genres[0]}
      onGenreClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
