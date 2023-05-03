import number from "./assets/img/number-shape.png";
import box from "./assets/img/box-shape.png";
import technology from "./assets/img/technology-shape.png";
import "./App.css";

function App() {
  return (
    <header>
      <div className="container">
        <div className="header_contents">
          <h2 className="banner_title">
            Optimize performance of your organization thanks to <br /> <span>Artificial Intelligence</span>
          </h2>
          <div className="bg_shape_wrapper">
            <div className="box_bg_shape">
              <img src={box} alt="" />
            </div>
            <div className="number_bg_shape">
              <img src={number} alt="" />
            </div>
            <div className="technology_bg_shape">
              <img src={technology} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape"></div>
    </header>
  );
}

export default App;
