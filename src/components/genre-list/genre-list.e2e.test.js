import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreList from "./genre-list.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  genres: [
    `All genres`,
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`
  ],
  activeGenre: `All genres`,
  anotherGenre: `Some genre`,
  functionHandler: jest.fn()
};

describe(`GenresList:`, () => {
  it(`Genre should run callback on mouse click`, () => {
    const genresList = mount(
        <GenreList
          genres={mocks.genres}
          activeItem={mocks.activeGenre}
          onGenreClick={mocks.functionHandler}
        />
    );

    const singleGenre = genresList.find(`a`).last();
    singleGenre.simulate(`click`, {preventDefault() {}});
    expect(mocks.functionHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should change activeItem state on clicked genre`, () => {
    const genresList = mount(
        <GenreList
          genres={mocks.genres}
          activeItem={mocks.activeGenre}
          onGenreClick={mocks.functionHandler}
        />
    );

    const singleGenre = genresList.find(`a`).last();
    singleGenre.simulate(`click`, {preventDefault() {}});
    expect(genresList.state(`activeItem`)).toEqual(`Thrillers`);
  });
});
