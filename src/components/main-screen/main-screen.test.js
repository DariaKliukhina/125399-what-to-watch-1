import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen';
import films from '../../mocks/films';
import genres from '../../mocks/genres';

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      films={films}
      genres={genres}
      onClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
