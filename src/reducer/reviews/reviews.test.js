import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {
  ActionType,
  ActionCreator,
  Operation,
  reducer
} from "./reviews.js";
const mocks = {
  loadedReviews: [
    {
      comment: `A movie that will take you to another world full of emotions.`,
      date: `2019-06-06T08:03:04.813Z`,
      id: 1,
      rating: 4,
      user: {id: 13, name: `Zak`}
    },
    {
      comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
      date: `2019-06-06T08:03:04.813Z`,
      id: 2,
      rating: 2,
      user: {id: 12, name: `Isaac`}
    }
  ]
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for loading reviews return correct action`, () => {
    expect(ActionCreator.loadReviews(mocks.loadedReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: mocks.loadedReviews
    });
  });

  it(`Action creator for loading reviews return correct payload`, () => {
    expect(ActionCreator.loadReviews(mocks.loadedReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: mocks.loadedReviews
    });
  });

  it(`Action creator for posting review return correct action`, () => {
    expect(ActionCreator.postReview(true)).toEqual({
      type: ActionType.POST_REVIEW,
      payload: true
    });
  });

  it(`Action creator for posting review return correct payload`, () => {
    expect(ActionCreator.postReview(true)).toEqual({
      type: ActionType.POST_REVIEW,
      payload: true
    });
  });

  it(`Action creator for clearing reviews return correct action`, () => {
    expect(ActionCreator.clearReviews()).toEqual({
      type: ActionType.CLEAR_REVIEWS
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      reviews: [],
      reviewPostedStatus: false
    });
  });

  it(`Reducer should change reviews to given value`, () => {
    expect(
        reducer(
            {
              reviews: [],
              reviewPostedStatus: false
            },
            {
              type: ActionType.LOAD_REVIEWS,
              payload: mocks.loadedReviews
            }
        )
    ).toEqual({
      reviews: mocks.loadedReviews,
      reviewPostedStatus: false
    });
  });

  it(`Reducer should change reviewPostedStatus to given value`, () => {
    expect(
        reducer(
            {
              reviews: mocks.loadedReviews,
              reviewPostedStatus: false
            },
            {
              type: ActionType.POST_REVIEW,
              payload: true
            }
        )
    ).toEqual({
      reviews: mocks.loadedReviews,
      reviewPostedStatus: true
    });
  });

  it(`Reducer should return to initial state on CLEAR_REVIEWS action`, () => {
    expect(
        reducer(
            {
              reviews: mocks.loadedReviews,
              reviewPostedStatus: true
            },
            {
              type: ActionType.CLEAR_REVIEWS
            }
        )
    ).toEqual({
      reviews: [],
      reviewPostedStatus: false
    });
  });

  it(`Should make a correct API call to /comments`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const reviewsLoader = Operation.loadReviews(1);

    apiMock.onGet(`/comments/1`).reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
