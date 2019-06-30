import React from "react";
import renderer from "react-test-renderer";

import {UserBlock} from "./user-block.jsx";

const mocks = {
  authorized: true,
  user: {
    userId: 1,
    userEmail: `mail`,
    userName: `name`,
    userAvatar: `ava`
  },
  history: {
    push: jest.fn()
  }
};

describe(`UserBlock:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer.create(<UserBlock {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
