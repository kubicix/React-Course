import { useEffect, useState } from "react";

function UsageEffect(){

    const [count,setCount]=useState(0);
    const [color,setColor]=useState("green")
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);


    useEffect(()=>{
        document.title=`Count: ${count} ${color}`;
    },[count,color]);

    useEffect(() => {
        window.addEventListener('resize',handleResize);
        console.log("event listener added");
        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("event listener removed");
        }
    },[]);

    useEffect(() =>{
        document.title=`size: ${width} x ${height}`;
    },[width,height]);

    function addCount(){
        setCount(c=>c+1)
    }

    function subtractCount(){
        setCount(c=>c-1)
    }

    function changeColor(){
        setColor(c=> c==="green"?"red":"green")
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
            <p style={{color:color,fontSize:"2rem",fontWeight:"bold"}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
            <br />
            <br />
            <p style={{fontSize:"2rem",fontWeight:"bold"}} onChange={handleResize}>Width : {width}</p><p style={{fontSize:"2rem",fontWeight:"bold"}} onChange={handleResize}>Height : {height}</p>
        </>
    )

}
export default UsageEffect