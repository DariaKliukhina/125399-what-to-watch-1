import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

const mocks = {
  poster: `poster`,
  preview: `preview`,
  options: {
    width: 300,
    height: 300
  }
};

describe(`VideoPlayer:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer.create(<VideoPlayer {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
