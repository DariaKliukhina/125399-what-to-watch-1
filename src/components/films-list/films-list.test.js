import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './films-list.jsx';
import films from '../../mocks/films';

it(`FilmsList screen renders correctly`, () => {
  const clickHandler = jest.fn();

  const component = renderer.create(
      <FilmsList
        films={films}
        onClick={clickHandler}
        onHover={clickHandler}
      />
  ).toJSON();

  expect(component).toMatchSnapshot();
});

