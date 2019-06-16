import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen';

const mocks = {
  films: [
    {
      genre: `Kids & Family`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      genre: `Dramas`,
      name: `Bohemian Rhapsody`,
      poster: `bohemian-rhapsody.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      genre: `Dramas`,
      name: `Macbeth`,
      poster: `macbeth.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      genre: `Crime`,
      name: `Aviator`,
      poster: `aviator.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      genre: `Sci-Fi`,
      name: `We need to talk about Kevin`,
      poster: `we-need-to-talk-about-kevin.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      genre: `Crime`,
      name: `What We Do in the Shadows`,
      poster: `what-we-do-in-the-shadows.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
  ],
  genres: [
    `All genres`,
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`
  ],
  activeGenre: `All genres`,
};

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      authorized={false}
      changeScreen={mocks.functionHandler}
      userAvatar={`ava`}
      userName={`name`}
      genres={mocks.genres}
      films={mocks.films}
      activeGenre={mocks.activeGenre}
      onGenreClick={jest.fn()}
      showLogIn={mocks.functionHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
