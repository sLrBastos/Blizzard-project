import { createSlice } from "@reduxjs/toolkit";

export const GameSlice = createSlice({
  name: "accessToken",
  initialState: {
    accessToken: "",
    mounts: {},
  },

  reducers: {
    getAccessToken: {
      reducer(state, action) {
        return { ...state, accessToken: action.payload };
      },
    },

    getMounts: {
      reducer(state, action) {
        return { ...state, mounts: action.payload.mounts };
      },
    },

    getPlayer: { 
      reducer(state, action) {
        return {...state, playerData: action.payload.mounts}
      }
    }
  },
});

export const { getAccessToken, getMounts, getPlayer } = GameSlice.actions;

export default GameSlice.reducer;
