import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getGenres = (state) => {
  return state[NAME_SPACE].genres;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};
