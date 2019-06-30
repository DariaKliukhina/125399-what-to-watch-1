import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Reviews} from "./reviews.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  activeFilmId: 3,
  onLoadReviews: jest.fn(),
  onClearReviews: jest.fn(),
  reviews: [
    {
      comment: `comment`,
      date: `2019-05-28T02:34:08.750Z`,
      id: 1,
      rating: 4,
      user: {
        name: `user`
      }
    },
    {
      comment: `comment2`,
      date: `2019-05-16T02:34:08.750Z`,
      id: 2,
      rating: 5,
      user: {
        name: `user2`
      }
    }
  ]
};

describe(`Reviews:`, () => {
  it(`Should return text date from timestamp`, () => {
    const reviews = mount(<Reviews {...mocks} />);

    expect(reviews.instance()._formDate(`2019-05-28T02:34:08.750Z`)).toEqual(
        `4 28, 2019.`
    );
  });
});
