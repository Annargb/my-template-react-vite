import "./App.css";
import icons from "./images/icons.svg";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Home />
      <svg>
        <use
          href={`${icons}#icon-close`}
          style={{ width: "30px", height: "30px" }}
        />
      </svg>
    </>
  );
}

export default App;
