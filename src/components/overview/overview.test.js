import React from "react";
import renderer from "react-test-renderer";

import Overview from "./overview.jsx";

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
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer.create(<Overview {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
