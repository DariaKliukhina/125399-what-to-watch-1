const initialState = {
  authorizationFailed: false,
  authorized: false,
  currentUser: {
    userId: 1,
    userEmail: ``,
    userName: ``,
    userAvatar: ``
  }
};

const ActionType = {
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`,
  CHANGE_AUTHORIZATION_PROCESS_STATUS: `CHANGE_AUTHORIZATION_PROCESS_STATUS`,
  SET_USER_INFO: `SET_USER_INFO`
};

const ActionCreator = {
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status
  }),

  changeAuthorizationProcessStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_PROCESS_STATUS,
    payload: status
  }),

   setUserInfo: (currentUser) => ({
    type: ActionType.SET_USER_INFO,
    payload: currentUser
  })
};


const Operation = {
  authorizeUser: (loginInfo, history) => (dispatch, _getState, api) => {
    return api
      .post(`/login`, loginInfo)
      .then((response) => {
        dispatch(ActionCreator.setUserInfo(response.data));
        dispatch(ActionCreator.changeAuthorizationStatus(true));
        history.push(`/`);
      })
      .catch(() => {
        dispatch(ActionCreator.changeAuthorizationProcessStatus(true));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return Object.assign({}, state, {
        authorized: action.payload
      });


    case ActionType.CHANGE_AUTHORIZATION_PROCESS_STATUS:
      return Object.assign({}, state, {
        authorizationFailed: action.payload
      });
    case ActionType.SET_USER_INFO:
      return Object.assign({}, state, {
        currentUser: {
          userId: action.payload.id,
          userEmail: action.payload.email,
          userName: action.payload.name,
          userAvatar: action.payload.avatar_url
        }
      });
  }

  return state;
};

export {
  reducer,
  ActionType,
  Operation,
  ActionCreator
};
