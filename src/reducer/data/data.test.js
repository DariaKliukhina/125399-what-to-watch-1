import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {
  formFilms,
  formGenres,
  ActionType,
  Operation,
  ActionCreator,
  reducer
} from "./data";
/* eslint camelcase: 0*/
const mocks = {
  loadedFilms: [
    {
      background_color: `#92918B`,
      background_image: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      genre: `Action`,
      id: 1,
      is_favorite: false,
      name: `The Revenant`,
      poster_image: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      preview_image: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
      preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8,
      released: 2015,
      run_time: 156,
      scores_count: 618498,
      starring: [(`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`)],
      video_link: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
    },
    {
      background_color: `#92918B`,
      background_image: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      genre: `Drama`,
      id: 2,
      is_favorite: true,
      name: `The Revenant`,
      poster_image: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      preview_image: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
      preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8,
      released: 202115,
      run_time: 156,
      scores_count: 618498,
      starring: [(`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`)],
      video_link: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
    },
    {
      background_color: `#92918B`,
      background_image: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      genre: `Comedy`,
      id: 3,
      is_favorite: false,
      name: `The Revenasdasant`,
      poster_image: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      preview_image: `https://es31-server.apasdapspot.com/wtw/static/film/preview/revenant.jpg`,
      preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8,
      released: 2015,
      run_time: 156,
      scores_count: 618498,
      starring: [(`Leonardo DiasdCaprio`, `Tom Hardy`)],
      video_link: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
    }
  ],
  /* eslint-disable no-underscore-dangle */
  films: [
    {
      backgroundColor: `#92918B`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      genre: `Action`,
      id: 1,
      isFavorite: false,
      name: `The Revenant`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      poster: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8,
      released: 2015,
      runTime: 156,
      scoresCount: 618498,
      starring: [(`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`)],
      videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
    },
    {
      backgroundColor: `#92918B`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      genre: `Drama`,
      id: 2,
      isFavorite: true,
      name: `The Revenant`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      poster: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8,
      released: 202115,
      runTime: 156,
      scoresCount: 618498,
      starring: [(`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`)],
      videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
    },
    {
      backgroundColor: `#92918B`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      genre: `Comedy`,
      id: 3,
      isFavorite: false,
      name: `The Revenasdasant`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      poster: `https://es31-server.apasdapspot.com/wtw/static/film/preview/revenant.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8,
      released: 2015,
      runTime: 156,
      scoresCount: 618498,
      starring: [(`Leonardo DiasdCaprio`, `Tom Hardy`)],
      videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
    }
  ]
  /* eslint-enable */
};

describe(`Business logic is correct`, () => {
  it(`Form films array of objects after loaded data`, () => {
    expect(formFilms(mocks.loadedFilms)).toEqual(mocks.films);
  });

  it(`Form sorted genres array with All genres at first place after films loaded`, () => {
    expect(formGenres(mocks.loadedFilms)).toEqual([
      `All genres`,
      `Action`,
      `Comedy`,
      `Drama`
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
      activeFilm: {},
      visibleFilms: [],
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
              activeGenre: `Action`,
              films: mocks.films,
              loadedFilms: mocks.films,
              genres: []
            },
            {
              type: ActionType.CHANGE_FILMS
            }
        )
    ).toEqual({
      activeGenre: `Action`,
      loadedFilms: mocks.films,
      genres: [],
      films: [
        {
          backgroundColor: `#92918B`,
          backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
          description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
          director: `Alejandro G. Iñárritu`,
          genre: `Action`,
          id: 1,
          isFavorite: false,
          name: `The Revenant`,
          posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
          poster: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          rating: 8,
          released: 2015,
          runTime: 156,
          scoresCount: 618498,
          starring: [(`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`)],
          videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
        }
      ]
    });
  });

  it(`Reducer should all films if choosed 'All genres' genre`, () => {
    expect(
        reducer(
            {
              activeGenre: `Action`,
              loadedFilms: mocks.films,
              genres: [],
              films: [
                {
                  backgroundColor: `#92918B`,
                  backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
                  description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
                  director: `Alejandro G. Iñárritu`,
                  genre: `Action`,
                  id: 1,
                  isFavorite: false,
                  name: `The Revenant`,
                  posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
                  poster: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
                  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
                  rating: 8,
                  released: 2015,
                  runTime: 156,
                  scoresCount: 618498,
                  starring: [(`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`)],
                  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
                }
              ]
            },
            {
              type: `SHOW_ALL`
            }
        )
    ).toEqual({
      activeGenre: `Action`,
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
      expect(dispatch).toHaveBeenCalledTimes(4);
    });
  });
});
