import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from './movie-card.jsx';

configure({adapter: new Adapter()});

const mock = {
  film: {
    title: `Macbeth`,
    picture: `picture.jpg`,
    preview: `video.mp4`
  }
};

it(`Film title correctly triggered click event `, () => {
  const onTitleClick = jest.fn();
  const props = {
    film: mock.film,
    onTitleClick,
  };

  const card = shallow(<MovieCard {...props}/>);

  const title = card.find(`.small-movie-card__link`);
  title.simulate(`click`, {preventDefault() {}});

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});

it(`On mouse enter on film card correctly triggered mouse enter handler`, () => {
  const onMouseEnter = jest.fn();
  const props = {
    film: mock.film,
  };

  MovieCard.prototype._mouseEnterHandler = onMouseEnter;

  const card = shallow(<MovieCard {...props}/>);

  card.simulate(`mouseEnter`, {preventDefault() {}});
  expect(onMouseEnter).toHaveBeenCalledTimes(1);
});
