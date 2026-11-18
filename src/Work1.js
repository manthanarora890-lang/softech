import { useState } from "react";
import "./First.css"
function Work1()
{
    const [first, setFirst]=useState(0)
    const [secound, setSecond]=useState(0)
     const [result, setResult]=useState(0)
    function add()
    {
        setResult(first+secound);
    }
     function sub()
    {
        setResult(first-secound);
    }
     function mul()
    {
        setResult(first*secound);
    }
     function div()
    {
        setResult(first/secound);
    }

    
    return(
        <div>
            <center>
        first no:<input type="text" placeholder="enter the first no" onChange={(e)=>setFirst(e.target.value)}/><br /><br /><br />
        second no:<input type="text" placeholder="enter the second no" onChange={(e)=>setSecond(e.target.value)} /><br /><br /><br />
        result:<input type="text" value={result} /><br /><br /><br /><br />
        <button onClick={add}>add</button>
        <button onClick={sub}>sub</button>
        <button onClick={mul}>mul</button>
        <button onClick={div}>div</button>
        </center>
        </div> 


    );
}
export default Work1;