import Cored from "./Cored";
import Cradd from "./Depcard";
import Depcard from "./Depcard";
import Offercard from "./Offercard";
import Footd from "./Footd";
import Navd from "./Navd";
 


function Departmental()
{
    return(
        <div className="home-page">
          <Navd />
         <Cored />
         <br />
         <Depcard />
         <Offercard />
         <Footd />
         </div>
    );
}
export default Departmental;