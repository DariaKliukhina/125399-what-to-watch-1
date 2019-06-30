import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withFilmDuration from "./with-film-duration.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFilmDuration(MockComponent);

describe(`withFilmDuration hoc:`, () => {
  it(`Should change filmDuration state when call onFilmDurationUpdate to given value`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.instance().onFilmDurationUpdate(3, 10, 59);
    expect(wrapper.state().filmDuration).toEqual({
      hours: 3,
      minutes: 10,
      seconds: 59
    });
  });
});
