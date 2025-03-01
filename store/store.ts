import { configureStore } from "@reduxjs/toolkit";
import { feedSlice } from "./feedSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      feed: feedSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
