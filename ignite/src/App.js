import React from "react";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Home />
      </GlobalStyles>
    </div>
  );
}

export default App;
