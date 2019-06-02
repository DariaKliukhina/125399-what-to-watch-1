import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withVideo from "./withVideo.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withVideo(MockComponent);

describe(`withVideo hoc:`, () => {
  it(`Should return loaded state when call getVideoLoadStatus`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.instance().getVideoLoadStatus();
    expect(wrapper.state().loaded).toEqual(false);
  });
});
