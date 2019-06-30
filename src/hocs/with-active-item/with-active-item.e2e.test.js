import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Component
import withActiveItem from "./with-active-item.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem hoc:`, () => {
  it(`Should change withActiveItem state when call onActiveItemChange to given value`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.instance().onActiveItemChange(3);
    expect(wrapper.state().activeItem).toEqual(3);
  });
});
