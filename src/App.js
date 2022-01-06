import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myPhoto from "./Photos/téléchargement (5).jpg"
import myPhoto1 from "./Photos/téléchargement (6).jpg"
import myPhoto3 from "./Photos/téléchargement.jpg"
import myPhotos from "./Photos/téléchargement (7).jpg"
import { ListePhotos } from "./Components/ListePhotos";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-8">
          <ListePhotos/>
          <img src={myPhotos} alt="waiting..."/>
          <img src={myPhoto1} alt="waiting..."/>
          <img src={myPhoto} alt="waiting..."/>
          <img src={myPhoto3} alt="waiting..."/>
          </div>
      </div>
    </div>
  );
}

export default App;
