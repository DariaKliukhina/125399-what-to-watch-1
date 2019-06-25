import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

const mocks = {
  id: 1,
  title: `John Wick`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  options: {
    width: 100,
    height: 100
  }
};

describe(`The application is displayed correctly.`, () => {
  it(`VideoPlayer correctly renders after launch`, () => {
    const {preview, poster, options} = mocks;

    const component = renderer.create(
        <VideoPlayer
          preview={preview}
          poster={poster}
          muted={true}
          isPlaying={false}
          options={options}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
