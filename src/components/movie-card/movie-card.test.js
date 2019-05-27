import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const mock = {
  film: {
    genre: [`Dramas`],
    title: `Macbeth`,
    picture: `picture.jpg`,
    preview: `video.mp4`
  }
};

it(`MovieCard renders correctly`, () => {
  const {film} = mock;

  const tree = renderer
    .create(<MovieCard
      film={film}
      onGenreClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

