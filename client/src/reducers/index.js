import { combineReducers } from "redux";
import userReducer from "./userReducer";

import posts from "./posts";

export const reducers = combineReducers({ posts: posts, user: userReducer });
