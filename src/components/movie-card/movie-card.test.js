import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {BrowserRouter} from "react-router-dom";

const mock = {
  film: {
    genre: `Dramas`,
    title: `Macbeth`,
    poster: `picture.jpg`,
    preview: `video.mp4`,
    id: 1
  },
  mouseHandler: jest.fn()
};


it(`MovieCard renders correctly`, () => {
  const {film} = mock;

  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCard
            id={film.id}
            title={film.title}
            genre={film.genre}
            poster={film.poster}
            preview={film.preview}
            onSmallCardEnter={film.mouseHandler}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

