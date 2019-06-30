import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

const mocks = {
  genres: [`All genres`, `Action`, `Drama`, `Comedy`],
  activeItem: `active`,
  onActiveItemChange: jest.fn()
};

describe(`GenresList:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer.create(
        <GenreList {...mocks} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
