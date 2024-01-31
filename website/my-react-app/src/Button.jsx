
function Button(){
    
    const styles = {
            backgroundColor: "hsl(200, 100%, 49%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "3em",
    }
    let count=0;

    const handleClick= () => {
        count++;
        console.log("OUCH! "+count)
        };
    const handleClick2= (name) => console.log(`${name} stop clicking me`);
    const handleEvent=(e) => e.target.textContent="YOU CLICKED ME ! 😁";

    return(
        <button style={styles} onClick={(e) => handleEvent(e)}>Click me 😃</button>
    );
}

export default Button