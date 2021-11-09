import './App.css';
import {BrowserRouter} from "react-router-dom";
import SkeletonContainer from "./components/Skeleton/SkeletonContainer";
import React from "react";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <SkeletonContainer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
