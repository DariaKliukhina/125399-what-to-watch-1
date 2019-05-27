import {actionChangeGenre, actionChangeFilms, reducer} from "./reducer";
import films from './mocks/films';

const mocks = films;

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(actionChangeGenre()).toEqual({
      type: `CHANGE_GENRE`,
      payload: `All genres`
    });
  });

  it(`Action creator for changing genre returns payload with new genre`, () => {
    expect(actionChangeGenre(`Some genre`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Some genre`
    });
  });

  it(`Action creator for changing films returns action to change films if choosed some genre`, () => {
    expect(actionChangeFilms(`Some genre`)).toEqual({
      type: `CHANGE_FILMS`
    });
  });

  it(`Action creator for changing films returns action to show all films if choosed 'All genres' genre`, () => {
    expect(actionChangeFilms(`All genres`)).toEqual({
      type: `SHOW_ALL`
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeGenre: `All genres`,
      films: mocks
    });
  });

  it(`Reducer should change genre to given value`, () => {
    expect(
        reducer(
            {
              activeGenre: `All genres`,
              films: mocks
            },
            {
              type: `CHANGE_GENRE`,
              payload: `Test Genre`
            }
        )
    ).toEqual({
      activeGenre: `Test Genre`,
      films: mocks
    });
  });

  it(`Reducer should filter films after genre change`, () => {
    expect(
        reducer(
            {
              activeGenre: `Sci-Fi`,
              films: mocks
            },
            {
              type: `CHANGE_FILMS`
            }
        )
    ).toEqual({
      activeGenre: `Sci-Fi`,
      films: [
        {
          genre: [`Sci-Fi`],
          title: `We need to talk about Kevin`,
          picture: `we-need-to-talk-about-kevin.jpg`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
        }
      ]
    });
  });

  it(`Reducer should return to initial state if choosed 'All genres' genre`, () => {
    expect(
        reducer(
            {
              activeGenre: `Crime`,
              films: [
                {
                  genre: [`Crime`],
                  title: `What We Do in the Shadows`,
                  picture: `what-we-do-in-the-shadows.jpg`,
                  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
                }
              ]
            },
            {
              type: `SHOW_ALL`
            }
        )
    ).toEqual({
      activeGenre: `All genres`,
      films: mocks
    });
  });
});
