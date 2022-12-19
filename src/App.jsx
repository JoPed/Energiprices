import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './scss/App.scss';

import Energipriser from "./pages/Energipriser";

import Navbar from "./components/Navbar";

function App() {
  

  return (
    <Router>

      <Navbar />

      <Routes>

        <Route index element={<Energipriser />} />

      </Routes>


    </Router>
  )
}

export default App;
