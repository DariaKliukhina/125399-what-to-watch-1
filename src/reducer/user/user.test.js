import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {
  ActionType,
  ActionCreator,
  Operation,
  reducer
} from "./user.js";
/* eslint camelcase: 0*/
const mocks = {
  loadedUser: {
    id: 1,
    email: `some@mail.ru`,
    name: `name`,
    avatar_url: `url`
  }
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing authorization status return correct action`, () => {
    expect(ActionCreator.changeAuthorizationStatus(false)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_STATUS,
      payload: false
    });
  });

  it(`Action creator for changing authorization status return correct payload`, () => {
    expect(ActionCreator.changeAuthorizationStatus(true)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_STATUS,
      payload: true
    });
  });

  it(`Action creator for changing authorization process status return correct action`, () => {
    expect(ActionCreator.changeAuthorizationProcessStatus(false)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_PROCESS_STATUS,
      payload: false
    });
  });

  it(`Action creator for changing authorization process status return correct payload`, () => {
    expect(ActionCreator.changeAuthorizationProcessStatus(true)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_PROCESS_STATUS,
      payload: true
    });
  });

  it(`Action creator for loading user info returns correct action`, () => {
    expect(ActionCreator.setUserInfo({})).toEqual({
      type: ActionType.SET_USER_INFO,
      payload: {}
    });
  });

  it(`Action creator for loading user info returns payload with user info`, () => {
    expect(ActionCreator.setUserInfo(mocks.loadedUser)).toEqual({
      type: ActionType.SET_USER_INFO,
      payload: mocks.loadedUser
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationFailed: false,
      authorized: false,
      currentUser: {
        userId: 1,
        userEmail: ``,
        userName: ``,
        userAvatar: ``
      }
    });
  });

  it(`Reducer should change authorized to given value`, () => {
    expect(
        reducer(
            {
              authorizationFailed: false,
              authorized: false,
              currentUser: {
                userId: 1,
                userEmail: ``,
                userName: ``,
                userAvatar: ``
              }
            },
            {
              type: ActionType.CHANGE_AUTHORIZATION_STATUS,
              payload: true
            }
        )
    ).toEqual({
      authorizationFailed: false,
      authorized: true,
      currentUser: {
        userId: 1,
        userEmail: ``,
        userName: ``,
        userAvatar: ``
      }
    });
  });

  it(`Reducer should change authorizationFailed to given value`, () => {
    expect(
        reducer(
            {
              authorizationFailed: false,
              authorized: false,
              currentUser: {
                userId: 1,
                userEmail: ``,
                userName: ``,
                userAvatar: ``
              }
            },
            {
              type: ActionType.CHANGE_AUTHORIZATION_PROCESS_STATUS,
              payload: true
            }
        )
    ).toEqual({
      authorizationFailed: true,
      authorized: false,
      currentUser: {
        userId: 1,
        userEmail: ``,
        userName: ``,
        userAvatar: ``
      }
    });
  });

  it(`Should make a correct API call to /login`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.authorizeUser();

    apiMock.onPost(`/login`).reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
