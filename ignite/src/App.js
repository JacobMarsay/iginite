import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadgames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadgames());
  });
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
