import React from "react";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Routes>
          {/* <Route path={["/game/:id", "/"]}>
            <Home />
          </Route> */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/game/:id" element={<Home />}></Route>
        </Routes>
      </GlobalStyles>
    </div>
  );
}

export default App;
