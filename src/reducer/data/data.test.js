import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {
  formFilms,
  formGenres,
  ActionCreator,
  ActionType,
  Operation,
  reducer
} from "./data.js";

const mocks = {
  films: [
    {
      name: `John Wick`,
      genre: `Crime`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      name: `Killers Bodyguard`,
      genre: `Comedies`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      name: `Star Wars`,
      genre: `Sci-Fi`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      name: `The Grand Budapest Hotel`,
      genre: `Dramas`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      name: `The Cabin in the Woods`,
      genre: `Thrillers`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  ],

  /* eslint camelcase: 0*/

  loadedFilms: [
    {
      name: `John Wick`,
      genre: `Crime`,
      preview_image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      name: `Killers Bodyguard`,
      genre: `Comedies`,
      preview_image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      name: `Star Wars`,
      genre: `Sci-Fi`,
      preview_image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      name: `The Grand Budapest Hotel`,
      genre: `Dramas`,
      preview_image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      name: `The Cabin in the Woods`,
      genre: `Thrillers`,
      preview_image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  ]
};

describe(`Business logic is correct`, () => {
  it(`Form films array of objects after loaded data`, () => {
    expect(formFilms(mocks.loadedFilms)).toEqual(mocks.films);
  });

  it(`Form sorted genres array with All genres at first place after films loaded`, () => {
    expect(formGenres(mocks.loadedFilms)).toEqual([
      `All genres`,
      `Comedies`,
      `Crime`,
      `Dramas`,
      `Sci-Fi`,
      `Thrillers`
    ]);
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre()).toEqual({
      type: `CHANGE_GENRE`,
      payload: `All genres`
    });
  });

  it(`Action creator for changing genre returns payload with new genre`, () => {
    expect(ActionCreator.changeGenre(`Some genre`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Some genre`
    });
  });

  it(`Action creator for changing films returns correct action`, () => {
    expect(ActionCreator.changeFilms()).toEqual({
      type: `CHANGE_FILMS`
    });
  });

  it(`Action creator for showing all films returns correct action`, () => {
    expect(ActionCreator.showAllFilms()).toEqual({
      type: `SHOW_ALL`
    });
  });

  it(`Action creator for loading films returns correct action`, () => {
    expect(ActionCreator.loadFilms([])).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: []
    });
  });

  it(`Action creator for loading films returns payload with new films`, () => {
    expect(ActionCreator.loadFilms(mocks.loadedFilms)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: mocks.loadedFilms
    });
  });

  it(`Action creator for forming genres array returns correct action`, () => {
    expect(ActionCreator.formGenres([])).toEqual({
      type: ActionType.FORM_GENRES,
      payload: []
    });
  });

  it(`Action creator for forming genres array returns  payload with films`, () => {
    expect(ActionCreator.formGenres(mocks.loadedFilms)).toEqual({
      type: ActionType.FORM_GENRES,
      payload: mocks.loadedFilms
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeGenre: `All genres`,
      films: [],
      loadedFilms: [],
      genres: []
    });
  });

  it(`Reducer should change genre to given value`, () => {
    expect(
        reducer(
            {
              activeGenre: `All genres`,
              films: [],
              loadedFilms: [],
              genres: []
            },
            {
              type: ActionType.CHANGE_GENRE,
              payload: `Test Genre`
            }
        )
    ).toEqual({
      activeGenre: `Test Genre`,
      films: [],
      loadedFilms: [],
      genres: []
    });
  });

  it(`Reducer should filter films after genre change`, () => {
    expect(
        reducer(
            {
              activeGenre: `Sci-Fi`,
              films: mocks.films,
              loadedFilms: mocks.films,
              genres: []
            },
            {
              type: ActionType.CHANGE_FILMS
            }
        )
    ).toEqual({
      activeGenre: `Sci-Fi`,
      loadedFilms: mocks.films,
      genres: [],
      films: [
        {
          name: `Star Wars`,
          genre: `Sci-Fi`,
          poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
        }
      ]
    });
  });

  it(`Reducer should all films if choosed 'All genres' genre`, () => {
    expect(
        reducer(
            {
              activeGenre: `Sci-Fi`,
              loadedFilms: mocks.films,
              genres: [],
              films: [
                {
                  name: `Star Wars`,
                  genre: `Sci-Fi`,
                  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
                  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
                }
              ]
            },
            {
              type: `SHOW_ALL`
            }
        )
    ).toEqual({
      activeGenre: `Sci-Fi`,
      films: mocks.films,
      loadedFilms: mocks.films,
      genres: []
    });
  });

  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
