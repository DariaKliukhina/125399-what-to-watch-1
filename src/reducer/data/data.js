const MAXIMUM_GENRES_NUMBER = 9;
const MAXIMUM_FILMS_PER_PACK = 20;

const initialState = {
  activeGenre: `All genres`,
  films: [],
  loadedFilms: [],
  genres: [],
  visibleFilms: [],
  activeFilm: {}
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_FILMS: `CHANGE_FILMS`,
  SHOW_ALL: `SHOW_ALL`,
  FORM_GENRES: `FORM_GENRES`,
  FORM_VISIBLE_FILMS: `FORM_VISIBLE_FILMS`,
  CLEAR_VISIBLE_FILMS: `CLEAR_VISIBLE_FILMS`,
  CHANGE_ACTIVE_FILM: `CHANGE_ACTIVE_FILM`,
};

const ActionCreator = {
  showAllFilms: () => {
    return {
      type: ActionType.SHOW_ALL
    };
  },
  changeGenre: (newGenre = `All genres`) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre
  }),
  changeFilms: () => {
    return {
      type: ActionType.CHANGE_FILMS
    };
  },
  loadFilms: (loadedFilms) => ({
    type: ActionType.LOAD_FILMS,
    payload: loadedFilms
  }),
  formGenres: (loadedFilms) => {
    return {
      type: ActionType.FORM_GENRES,
      payload: loadedFilms
    };
  },
  formVisibleFilms: () => {
    return {
      type: ActionType.FORM_VISIBLE_FILMS
    };
  },
  clearVisibleFilms: () => {
    return {
      type: ActionType.CLEAR_VISIBLE_FILMS
    };
  },
  changeActiveFilm: (newFilmId = null) => {
    return {
      type: ActionType.CHANGE_ACTIVE_FILM,
      payload: newFilmId
    };
  }
};

const updateVisibleFilms = (allFilms, currentVisibleFilms) => {
  let visibleFilms = currentVisibleFilms.slice();

  if (visibleFilms.length < allFilms.length) {
    if (!visibleFilms.length) {
      if (allFilms.length > MAXIMUM_FILMS_PER_PACK) {
        visibleFilms = allFilms.slice(0, MAXIMUM_FILMS_PER_PACK);
      } else {
        visibleFilms = allFilms.slice(0, allFilms.length);
      }
    } else {
      if (visibleFilms.length + MAXIMUM_FILMS_PER_PACK >= allFilms.length) {
        visibleFilms = visibleFilms.concat(
            allFilms.slice(visibleFilms.length, allFilms.length)
        );
      } else {
        visibleFilms = visibleFilms.concat(
            allFilms.slice(
                visibleFilms.length,
                visibleFilms.length + MAXIMUM_FILMS_PER_PACK
            )
        );
      }
    }
  }

  return visibleFilms;
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadFilms(response.data));
      dispatch(ActionCreator.formGenres(response.data));
      dispatch(ActionCreator.formVisibleFilms());
      dispatch(ActionCreator.changeActiveFilm());
    });
  }
};

const formFilms = (films) => {
  return films.map((film) => {
    return {
      id: film.id,
      name: film.name,
      genre: film.genre,
      backgroundColor: film.background_color,
      backgroundImage: film.background_image,
      description: film.description,
      director: film.director,
      preview: film.preview_video_link,
      poster: film.preview_image,
      isFavorite: film.is_favorite
    };
  });
};

const formGenres = (films) => {
  const newGenres = [];

  films.forEach((film) => {
    if (
      !newGenres.some((genre) => genre === film.genre) &&
      newGenres.length <= MAXIMUM_GENRES_NUMBER
    ) {
      newGenres.push(film.genre);
    }
  });

  newGenres.sort();
  newGenres.unshift(`All genres`);

  return newGenres;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });

    case ActionType.CHANGE_FILMS:
      return Object.assign({}, state, {
        films: state.loadedFilms.filter((film) => {
          return film.genre === state.activeGenre;
        })
      });

    case ActionType.SHOW_ALL:
      return Object.assign({}, state, {
        films: state.loadedFilms
      });

    case ActionType.LOAD_FILMS:
      const formedFilms = formFilms(action.payload);
      return Object.assign({}, state, {
        films: formedFilms,
        loadedFilms: formedFilms
      });

    case ActionType.FORM_GENRES:
      return Object.assign({}, state, {
        genres: formGenres(action.payload)
      });
    case ActionType.FORM_VISIBLE_FILMS:
      const newVisibleFilms = updateVisibleFilms(
          state.films,
          state.visibleFilms
      );

      return Object.assign({}, state, {
        visibleFilms: newVisibleFilms
      });

    case ActionType.CLEAR_VISIBLE_FILMS:
      return Object.assign({}, state, {
        visibleFilms: []
      });

    case ActionType.CHANGE_ACTIVE_FILM:
      return Object.assign({}, state, {
        activeFilm: !action.payload
          ? state.loadedFilms[1]
          : state.loadedFilms[
            state.loadedFilms.findIndex((film) => {
              return film.id === parseInt(action.payload, 0);
            })
          ]
      });
  }
  return state;
};

export {ActionCreator, reducer, Operation, formFilms, formGenres, ActionType};
