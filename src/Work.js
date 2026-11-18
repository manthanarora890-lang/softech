import toi from "./toi.webp"
import First from "./First.css"

function Work()
{
    return(
<table border={6}>
        <div className="bar">
            <ul className="bar">
            <li className="bar1">logo</li>
            <li>log in</li>
            <li>contact us</li>
            <li>about us</li>
            <li>home</li>
            </ul>
            <center>
            <div className="imo">
        <img src={toi}  alt="toi" />
    </div>
       </center>

       <div className="announs">
        <center> 
        <h1>announcements</h1>
        </center>
        <marquee direction="right"> 
            <ol className="announss">
            <li className="s">admission form open</li>
            <li className="s">exam schedule released</li>
            <li className="s">holiday notice</li>
            <li className="s">scholarship application</li>
            <li className="s">important college notice</li>
            </ol>
            </marquee>
    </div>
    <div>
        <center>
        <h1 className="news1">news</h1>
        </center> 
         <marquee direction="right"> 
        <ol className="news">
            <li className="n">annual fest</li>
            <li className="n">sport competition</li>
            <li className="n">cultural event</li>
            <li className="n">student achivement</li>
            <li className="n">workshop and seminars</li>
            </ol>
            </marquee>
       </div>
       <div className="foot">
        <h6>©2026jcdcollege.all right reserved</h6>
       </div>
        </div> 
        </table>        
    );
}
export default Work;


 