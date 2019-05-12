import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from './movie-card.jsx';

configure({adapter: new Adapter()});

const mock = {
  film: {
    title: `Macbeth`,
    picture: `picture.jpg`,
  }
};

it(`MovieCard clicks works correctly`, () => {
  const {film} = mock;
  const clickHandler = jest.fn();
  const filmCard = mount(<MovieCard
    onClick={clickHandler}
    onHover={clickHandler}
    film={film}
  />);

  const button = filmCard.find(`button`);
  const link = filmCard.find(`a`);

  button.simulate(`click`, {
    preventDefault: clickHandler,
  });

  link.simulate(`click`, {
    preventDefault: clickHandler,
  });

  expect(clickHandler).toHaveBeenCalledTimes(2);
});

it(`MovieCard resends correctly item`, () => {
  const {film} = mock;
  const clickHandler = jest.fn();
  const item = mount(<MovieCard
    onClick={clickHandler}
    onHover={clickHandler}
    film={film}
  />);

  const playButton = item.find(`.small-movie-card__play-btn`);
  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledWith(film);
});
