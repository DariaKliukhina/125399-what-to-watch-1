import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {SignIn} from "./signIn.jsx";

const mocks = {
  functionHandler: jest.fn()
};

describe(`SignIn:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn
              changeAuthorizationStatus={mocks.functionHandler}
              validateMail={mocks.functionHandler}
              validatePassword={mocks.functionHandler}
              emailError={false}
              passwordError={false}
              authorizationFailed={false}
              authorized={false}
              history={{push: mocks.functionHandler}}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
