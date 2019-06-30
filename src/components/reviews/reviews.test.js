import React from "react";
import renderer from "react-test-renderer";

import {Reviews} from "./reviews.jsx";

const mocks = {
  activeFilmId: 3,
  onLoadReviews: jest.fn(),
  onClearReviews: jest.fn(),
  reviews: [
    {
      comment: `comment`,
      date: `20-12-2024`,
      id: 1,
      rating: 4,
      user: {
        name: `user`
      }
    },
    {
      comment: `comment2`,
      date: `20-12-2025`,
      id: 2,
      rating: 5,
      user: {
        name: `user2`
      }
    }
  ]
};

describe(`Reviews:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer.create(<Reviews {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
