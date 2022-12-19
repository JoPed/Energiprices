import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './scss/App.scss';

import Energipriser from "./pages/Energipriser";
import Guide from "./pages/Guide";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function App() {
  

  return (
    <Router>

      <Navbar />

      <Routes>

        <Route index element={<Energipriser />} />
        <Route path='/guide' element={<Guide /> } /> 
        <Route path='/about' element={<About /> } /> 

      </Routes>


    </Router>
  )
}

export default App;
