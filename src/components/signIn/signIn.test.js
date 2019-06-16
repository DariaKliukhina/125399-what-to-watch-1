import React from "react";
import renderer from "react-test-renderer";

import {SignIn} from "./signIn.jsx";

const mocks = {
  functionHandler: jest.fn()
};

describe(`SignIn:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(
          <SignIn
            changeAuthorizationStatus={mocks.functionHandler}
            validateMail={mocks.functionHandler}
            validatePassword={mocks.functionHandler}
            emailError={false}
            passwordError={false}
            authorizationFailed={false}
            changeScreen={mocks.functionHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
