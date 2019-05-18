import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mock = {
  film: {
    title: `Bohemian Rhapsody`,
    picture: `poster.jpg`,
    preview: `video.mp4`,
  },
};

it(`Video player correctly renders`, () => {
  const props = {
    videoSrc: mock.film.preview,
    posterSrc: mock.film.picture,
    options: {
      width: 100,
      height: 100,
    }
  };

  const tree = renderer.create(<VideoPlayer {...props}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

