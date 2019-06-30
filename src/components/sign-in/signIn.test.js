import React from "react";
import renderer from "react-test-renderer";

import {SignIn} from "./signIn.jsx";

const mocks = {
  onHomeRedirect: jest.fn(),
  onChangeAuthorizationStatus: jest.fn(),
  onEmailValidate: jest.fn(),
  onPasswordValidate: jest.fn(),
  emailError: false,
  passwordError: false,
  authorizationFailed: false,
  authorized: true,
  history: {
    push: jest.fn()
  }
};

describe(`SignIn:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer.create(<SignIn {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
