import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "../../reducer/index";
import {createStore} from "redux";

import {ReviewPage} from "./review-page.jsx";

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
  const store = createStore(reducer);

  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <ReviewPage {...mocks} />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
