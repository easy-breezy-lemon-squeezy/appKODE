import './App.css';
import Skeleton from "./components/Skeleton/Skeleton";
import {BrowserRouter} from "react-router-dom";
import SkeletonContainer from "./components/Skeleton/SkeletonContainer";

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
