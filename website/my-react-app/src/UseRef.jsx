import { useEffect, useRef, useState } from "react";

function UseRef(){

    const inputRef1 =useRef(null)
    const inputRef2 =useRef(null)
    const inputRef3 =useRef(null)

    let [number,setNumber]=useState(0);

    useEffect(() => {
        console.log("Component Rendered")
    })
    
    function handleClick1(){
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor="yellow";
       inputRef2.current.style.backgroundColor="";
       inputRef3.current.style.backgroundColor="";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
       inputRef3.current.style.backgroundColor="";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
       inputRef1.current.style.backgroundColor="";
    }
    
    return(
        <>
        <div>
            <button onClick={handleClick1}>Click me! 1</button>
            <input  ref={inputRef1}/><br />
            <button onClick={handleClick2}>Click me! 2</button>
            <input  ref={inputRef2}/><br />
            <button onClick={handleClick3}>Click me! 3</button>
            <input  ref={inputRef3}/>
        </div>
            
        </>
    );
}
export default UseRef