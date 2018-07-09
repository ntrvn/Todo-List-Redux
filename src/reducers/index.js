import { ADD_ARTICLE } from "../constants/action-types";
import { DEL_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      };
    case DEL_ARTICLE:
      console.log(action.payload);
      return {
        ...state,
        articles: state.articles.filter(
          articles => articles.id !== action.payload.id
        )
      };
      console.log(state.articles);
    default:
      return state;
  }
};

export default rootReducer;
