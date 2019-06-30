import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Details from "./details.jsx";

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

describe(`Details:`, () => {
  it(`Should return film time in text format - *h *m if time more or equal 60 minutes`, () => {
    const details = shallow(<Details {...mocks} />);

    expect(details.instance()._formTime(61)).toEqual(`1h 1m`);
  });

  it(`Should return film time in text format - *m if time less 60 minutes`, () => {
    const details = shallow(<Details {...mocks} />);

    expect(details.instance()._formTime(59)).toEqual(`59m`);
  });
});
