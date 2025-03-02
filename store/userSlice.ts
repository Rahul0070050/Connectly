import { createSlice } from "@reduxjs/toolkit";
import { sampleProfileURI } from "@/data/profile";

type USER = {
  id: number;
  avatar?: string;
  userName?: string;
};
// Define a type for the slice state
export interface UserSlice {
  user: USER;
}

// Define the initial state using that type
const initialState: UserSlice = {
  user: {
    id: 11,
    avatar: sampleProfileURI,
    userName: "Rahul O R",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
