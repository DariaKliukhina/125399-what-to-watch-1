import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";


import Favorites from "./favorites.jsx";

describe(`Favorites:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Favorites authorized={true} userAvatar={`avatar`} userName={`User`}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
