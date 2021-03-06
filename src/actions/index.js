import { ADD_ARTICLE } from "../constants/action-types";
import { DEL_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const delArticle = article => ({
  type: DEL_ARTICLE,
  payload: article
});
