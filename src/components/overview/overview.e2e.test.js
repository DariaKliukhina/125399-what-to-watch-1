import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Overview from "./overview.jsx";

const FilmRating = {
  BAD: `bad`,
  NORMAL: `normal`,
  GOOD: `good`,
  VERY_GOOD: `very good`,
  AWESOME: `awesome`
};

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  activeFilm: {
    backgroundImage: `back`,
    description: `description`,
    director: `Director`,
    genre: `Action`,
    id: 1,
    isFavorite: false,
    name: `Title`,
    poster: `string`,
    posterImage: `string`,
    preview: `string`,
    rating: 5,
    released: 2018,
    runTime: 88,
    scoresCount: 2000,
    starring: [`1`, `2`, `3`],
    videoLink: `link`
  }
};

describe(`Overview:`, () => {
  it(`Should set film rating to bad if it value  less then 3`, () => {
    const overview = shallow(<Overview {...mocks} />);

    expect(overview.instance()._formTextRating(2)).toEqual(FilmRating.BAD);
  });

  it(`Should set film rating to normal if it value more or equal to 3 and less 5`, () => {
    const overview = shallow(<Overview {...mocks} />);

    expect(overview.instance()._formTextRating(3)).toEqual(FilmRating.NORMAL);
  });

  it(`Should set film rating to good if it value more or equal to 5 and less 8`, () => {
    const overview = shallow(<Overview {...mocks} />);

    expect(overview.instance()._formTextRating(7)).toEqual(FilmRating.GOOD);
  });

  it(`Should set film rating to good if it value 8 or 9`, () => {
    const overview = shallow(<Overview {...mocks} />);

    expect(overview.instance()._formTextRating(9)).toEqual(
        FilmRating.VERY_GOOD
    );
  });

  it(`Should set film rating to awesome if it value 10`, () => {
    const overview = shallow(<Overview {...mocks} />);

    expect(overview.instance()._formTextRating(10)).toEqual(FilmRating.AWESOME);
  });
});
