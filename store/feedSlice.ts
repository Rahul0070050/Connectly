import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { StaticImageData } from "next/image";

type FEED = {
  avatar?: string;
  userName?: string;
  feed?: StaticImageData;
  caption?: string;
  likes?: number;
  comments?: { user: string; name: string; comment: string }[];
  time?: string;
  tags?: string[];
};
// Define a type for the slice state
export interface AppSlice {
  viewPost: FEED;
}

// Define the initial state using that type
const initialState: AppSlice = {
  viewPost: {},
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    viewFeed: (state, action) => {
      state.viewPost = action.payload;
    },
  },
});

export const { viewFeed } = feedSlice.actions;

export default feedSlice.reducer;
