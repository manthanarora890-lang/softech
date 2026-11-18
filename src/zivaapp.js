 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Shopz from "./Shopz";
import Homez from "./Homez";
import Cartz from "./Cartz";
 
function App() {
  return (
     
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homez />} />
         <Route path="/shop" element={<Shopz />} />
         <Route path="/cart" element={<Cartz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;