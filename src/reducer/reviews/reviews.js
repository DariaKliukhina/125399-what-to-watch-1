const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CLEAR_REVIEWS: `CLEAR_REVIEWS`
};

const initialState = {
  reviews: []
};

const actionLoadReviews = (loadedReviews) => {
  return {
    type: ActionType.LOAD_REVIEWS,
    payload: loadedReviews
  };
};

const actionClearReviews = () => {
  return {
    type: ActionType.CLEAR_REVIEWS
  };
};

const Operation = {
  loadReviews: (filmId) => (dispatch, _getState, api) => {
    return api.get(`/comments/${filmId}`).then((response) => {
      dispatch(actionLoadReviews(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload.sort(function (reviewA, reviewB) {
          return new Date(reviewB.date) - new Date(reviewA.date);
        })
      });

    case ActionType.CLEAR_REVIEWS:
      return Object.assign({}, state, initialState);
  }

  return state;
};

export {actionClearReviews, Operation, reducer};
