import { LIKE_CAT, UNLIKE_CAT, STORE_CAT, DATA_LOADED } from "./type";

export const storeCat = (data) => {
  return {
    type: STORE_CAT,
    payload: data
  };
};

export const likeCat = (data) => {
  return {
    type: LIKE_CAT,
    payload: data
  };
};

export const unlikeCat = (data) => {
  return {
    type: UNLIKE_CAT,
    payload: data
  };
};

export const dataLoaded = () => {
  return {
    type: DATA_LOADED
  };
};
