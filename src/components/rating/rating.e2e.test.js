import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";


import Rating from "./rating.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  activeStar: `1`,
  onStarClick: jest.fn()
};

describe(`Rating:`, () => {
  it(`Should form 5 stars`, () => {
    const rating = mount(<Rating {...mocks} />);

    expect(rating.find(`.rating__input`).length).toEqual(5);
  });

  it(`Should set first star active by default`, () => {
    const rating = mount(<Rating {...mocks} />);

    expect(
        rating
        .find(`.rating__input`)
        .first()
        .props().checked
    ).toEqual(true);
  });

  it(`Should run callback on star click`, () => {
    const rating = mount(<Rating {...mocks} />);

    const ratingStar = rating.find(`.rating__input`).last();
    ratingStar.simulate(`change`, {preventDefault() {}});
    expect(mocks.onStarClick).toHaveBeenCalledTimes(1);
  });
});
