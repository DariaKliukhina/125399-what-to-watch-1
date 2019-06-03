import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from './movie-card.jsx';

configure({adapter: new Adapter()});

const mock = {
  film: {
    genre: [`Dramas`],
    title: `Macbeth`,
    picture: `picture.jpg`,
    preview: `video.mp4`
  }
};

it(`Film title correctly triggered click event `, () => {
  const onGenreClick = jest.fn();
  const props = {
    film: mock.film,
    onGenreClick,
  };

  const movieCard = mount(<MovieCard {...props}/>);

  const titleLink = movieCard.find(`.small-movie-card__link`);

  titleLink.simulate(`click`, {preventDefault() {}});

  expect(onGenreClick).toHaveBeenCalledTimes(1);
});

it(`On mouse enter on film card correctly triggered mouse enter handler`, () => {
  const onGenreClick = jest.fn();
  const props = {
    film: mock.film,
    onGenreClick,
  };
  jest.useFakeTimers();

  const movieCard = mount(<MovieCard {...props}/>);

  const link = movieCard.find(`.small-movie-card__link`);

  link.simulate(`click`);

  expect(onGenreClick).toHaveBeenCalledTimes(1);
});
