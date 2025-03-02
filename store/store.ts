import { configureStore } from "@reduxjs/toolkit";
import { feedSlice } from "./feedSlice";
import { userSlice } from "./userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      feed: feedSlice.reducer,
      user: userSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
