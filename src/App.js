import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myPhoto from "./Photos/téléchargement (5).jpg";
import myPhoto1 from "./Photos/téléchargement (6).jpg";
import myPhoto3 from "./Photos/téléchargement.jpg";
import myPhotos from "./Photos/téléchargement (7).jpg";
import { ListePhotos } from "./Components/ListePhotos";
import "./style.css";
import { NaveBare } from "./Components/NaveBare";

function App() {
  return (
    <div className="App">
      <NaveBare />
      <div className="row">
        <div className="col-6">
          <ListePhotos />
        </div>
        <div className="col-6">
          <div className="list-hor">
            <img src={myPhotos} alt="waiting..." style={{ width: "50%" }} />
            <div class="container">
              <h6>
                <b>SRC Photo</b>
              </h6>
            </div>
          </div>
          <br />

          <div className="list-hor">
            <img src={myPhoto} alt="waiting..." style={{ width: "50%" }} />
            <div class="container">
              <h6>
                <b>SRC Photo</b>
              </h6>
            </div>
          </div>
          <br />

          <div className="list-hor">
            <img src={myPhoto1} alt="waiting..." style={{ width: "50%" }} />
            <div class="container">
              <h6>
                <b>SRC Photo</b>
              </h6>
            </div>
          </div>
          <br />

          <div className="list-hor">
            <img src={myPhoto3} alt="waiting..." style={{ width: "50%" }} />
            <div class="container">
              <h6>
                <b>SRC Photo</b>
              </h6>
            </div>
          </div>
          <br />
          </div>

          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col-6">
                <div className="list-hor" >
                  <video
                    src="/video/video nature.mp4"
                    style={{ width: "50%" }}
                    controls="controls" autoplay="true"
                  />
                  <div class="container">
                    <h6>
                      <b>Public Video</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
