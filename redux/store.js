import { configureStore } from "@reduxjs/toolkit";
import nightModeReducer from "./nightMode";
import dataReducer from "./data";

export const store = configureStore({
  reducer: {
    nightMode: nightModeReducer,
    data: dataReducer,
  },
});
