import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

const mockedFilm = {
  id: 1,
  title: `John Wick`,
  genre: `Action`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const mocks = Object.assign(mockedFilm, {
  mouseHandler: jest.fn()
});

describe(`MovieCard:`, () => {
  it(`Card should run callback on mouse enter`, () => {
    const movieCard = mount(
        <BrowserRouter>
          <MovieCard
            id={mocks.id}
            title={mocks.title}
            genre={mocks.genre}
            poster={mocks.poster}
            preview={mocks.preview}
            onCardEnter={mocks.mouseHandler}
          />
        </BrowserRouter>
    );

    movieCard.simulate(`mouseenter`);
    expect(mocks.mouseHandler).toHaveBeenCalledTimes(1);
  });

  it(`Card should return film index on mouse enter`, () => {
    const movieCard = mount(
        <BrowserRouter>
          <MovieCard
            id={mocks.id}
            title={mocks.title}
            genre={mocks.genre}
            poster={mocks.poster}
            preview={mocks.preview}
            onCardEnter={mocks.mouseHandler}
          />
        </BrowserRouter>
    );

    movieCard.simulate(`mouseleave`);
    expect(mocks.mouseHandler).toHaveBeenCalledWith(mocks.id);
  });
});
