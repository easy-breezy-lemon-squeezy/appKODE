import './App.css';
import {BrowserRouter, HashRouter} from "react-router-dom";
import SkeletonContainer from "./components/Skeleton/SkeletonContainer";
import React from "react";

function App() {

  return (
      <HashRouter>
          <div className="App">
              <SkeletonContainer/>
          </div>
      </HashRouter>
  );
}

export default App;
