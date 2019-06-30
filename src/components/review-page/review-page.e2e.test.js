import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ReviewPage} from "./review-page.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  submitButtonDisabled: true,
  textareaDisabled: false,
  reviewPostedStatus: false,
  activeItem: `2`,
  onPrepareToPost: jest.fn(),
  onPostReview: jest.fn(),
  onSubmitButtonStateChange: jest.fn(),
  onTextareaStateChange: jest.fn(),
  onActiveItemChange: jest.fn(),
  actionPostReview: jest.fn(),
  onHomeRedirect: jest.fn(),
  history: {
    push: jest.fn()
  },
  match: {
    params: {
      id: `2`
    }
  },
  activeFilm: {
    backgroundImage: `image`,
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
  },
  visibleFilms: [
    {
      backgroundImage: `image`,
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
    },
    {
      backgroundImage: `image`,
      description: `description2`,
      director: `Director2`,
      genre: `Drama`,
      id: 2,
      isFavorite: true,
      name: `Title2`,
      poster: `string`,
      posterImage: `string`,
      preview: `string`,
      rating: 5,
      released: 2019,
      runTime: 12345,
      scoresCount: 2000,
      starring: [`2`, `3`, `4`],
      videoLink: `link`
    },
    {
      backgroundImage: `image`,
      description: `description3`,
      director: `Director3`,
      genre: `Comedy`,
      id: 3,
      isFavorite: false,
      name: `Title3`,
      poster: `string`,
      posterImage: `string`,
      preview: `string`,
      rating: 10,
      released: 1998,
      runTime: 123,
      scoresCount: 1,
      starring: [`4`, `9`, `10`],
      videoLink: `link`
    }
  ]
};

describe(`ReviewPage:`, () => {
  it(`On input should run callback`, () => {
    const reviewPage = shallow(<ReviewPage {...mocks} />);

    const textarea = reviewPage.find(`.add-review__textarea`);

    textarea.simulate(`change`, {target: {value: `Some message`}});
    expect(mocks.onSubmitButtonStateChange).toHaveBeenCalledTimes(1);
  });

  it(`Should check input length for activating submit button`, () => {
    const reviewPage = shallow(<ReviewPage {...mocks} />);

    expect(reviewPage.instance()._checkMessageLength(`Small message`)).toEqual(
        true
    );
    expect(
        reviewPage
        .instance()
        ._checkMessageLength(
            `50 symbols Lorem ipsum dolor sit amet, consectetue`
        )
    ).toEqual(false);
    expect(
        reviewPage
        .instance()
        ._checkMessageLength(
            `100 symbols Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod`
        )
    ).toEqual(false);
    expect(
        reviewPage
        .instance()
        ._checkMessageLength(
            `201 symbols     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostruda`
        )
    ).toEqual(true);
  });
});
