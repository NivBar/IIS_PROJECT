import "./css/App.css";
import 'react-dropdown/style.css';
import {Dropdowns} from "./components/Dropdowns"


function App() {


  return (
      <div className="bacground_img">
        <Dropdowns/>
      </div>
  );
}

/*
return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dropdowns/>}/>
        <Route exact path="/result" element={<GarageList/>}/>
      </Routes>
    </BrowserRouter>
  )
*/

export default App