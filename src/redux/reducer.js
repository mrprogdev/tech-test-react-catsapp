import { combineReducers } from "redux";
import { LIKE_CAT, UNLIKE_CAT, STORE_CAT, DATA_LOADED } from "./type";

const initialState = {
  cat_array: [],
  liked_cat_array: [],
  is_data_loaded: false
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CAT:
      return {
        ...state,
        cat_array: [...state.cat_array, action.payload]
      };
    case LIKE_CAT:
      return {
        ...state,
        liked_cat_array: [...state.liked_cat_array, action.payload]
      };
    case UNLIKE_CAT:
      return {
        ...state,
        liked_cat_array: state.liked_cat_array.filter(
          (todo) => todo.id !== action.payload
        ),
        is_cat_liked: false
      };
    case DATA_LOADED:
      return {
        ...state,
        is_data_loaded: true
      };

    default:
      return state;
  }
};

export default combineReducers({ cat: catReducer });
