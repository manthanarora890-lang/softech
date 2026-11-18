import Aboutd from "./Aboutd";
import Departmental from "./Departmental";
import Homed from "./Homed";
import Contd from "./contd";
import Logind from "./Logind";
import Cartd from "./Cartd";
import Proddetail from "./Proddetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Logind />} />

        <Route path="/shop" element={<Departmental />} />

        <Route path="/home" element={<Homed />} />
        <Route path="/" element={<Homed />} />

        <Route path="/product/:id" element={<Proddetail />} />

        <Route path="/about-us" element={<Aboutd />} />

        <Route path="/contact" element={<Contd />} />

        <Route path="/cart" element={<Cartd />} />
      </Routes>
    </Router>
  );
}

export default App;
