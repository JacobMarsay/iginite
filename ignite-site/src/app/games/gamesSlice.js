import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularGames: [],
  newGames: [],
  upcoming: [],
  searchedGame: [],
  test: 5,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGames: (state) => {
      return { ...state };
    },
  },
});

export const { getGames } = gamesSlice.actions;

export default gamesSlice.reducer;
