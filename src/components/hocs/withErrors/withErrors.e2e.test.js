import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withErrors from "./withErrors.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withErrors(MockComponent);

describe(`withErrors hoc:`, () => {
  it(`Should change emailError state after it validation to true if given wrong email`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.instance().validateMail(`notemail`);
    expect(wrapper.state().emailError).toEqual(true);
  });

  it(`Should change passwordError state after it validation to true if no password provided`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.instance().validatePassword();
    expect(wrapper.state().passwordError).toEqual(true);
  });
});
