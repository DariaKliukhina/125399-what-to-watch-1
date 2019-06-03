import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Component
import withActiveItem from "./withActiveItem.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem hoc:`, () => {
  it(`Should change withActiveItem state when call changeActiveItem to given value`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.instance().changeActiveItem(3);
    expect(wrapper.state().activeItem).toEqual(3);
  });
});
