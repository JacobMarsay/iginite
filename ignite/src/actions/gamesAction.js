import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newgamesUrl } from "../api";

// ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newGameData = await axios.get(newgamesUrl());
  console.log("I am the action from load games" + newGameData);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGameData.data.results,
    },
  });
};
