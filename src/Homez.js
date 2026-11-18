 import { BrowserRouter } from "react-router-dom";
import Naviz from "./Naviz";
import Coruz from "./Coruz";
import Cardz from "./Cardz";
import Category from "./Category";
import Whyus from "./Whyus";
import Footz from "./Footz";
function Homez() 
{
  return ( 
    <> 
    <Naviz />
    <Coruz />
    <Cardz />
    <Category />
    <Whyus />
    <Footz />
     </>
  );
}

export default Homez;
