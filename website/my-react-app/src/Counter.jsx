import React,{useState} from "react"

function Counter(){
    const[count, setCount]= useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    const styles = {
        backgroundColor: "hsl(200, 100%, 49%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2em",
        margin:"5px",
        width:"200px",
}


    return (
        <>
            <div className="counterdiv">
                <p className="counterp">Count: {count}</p><br />
                <button onClick={increment} style={styles}>Increase Count</button>
                <button onClick={decrement} style={styles}>Decrease Count</button>
                <button onClick={reset} style={styles}>Reset Count</button>
            </div>
        </>    

    );
}
export default Counter