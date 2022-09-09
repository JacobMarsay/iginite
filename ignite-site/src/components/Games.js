import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gamesSlice from "../app/games/gamesSlice";

export function Games() {
  const test = useSelector((store) => store.games.test);
  return <p>{test}</p>;
}
