import { useState } from "react";


function MyComponent2(){
    const [cars,setCars] = useState([])
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");


    function handleAddCar(){
        const newCar={
            year:carYear,
            make:carMake,
            model:carModel,
        }
        setCars(c =>[...cars,newCar])
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleRemoveCar(index){
        setCars(c=>c.filter((_,i)=>i!==index));
    }

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleMakeChange(event){
        setMake(event.target.value);
    }

    function handleModelChange(event){
        setModel(event.target.value);
    }

    return(
        <>
        <div>
            <h2>List of Car Objects:</h2>
            <ul>
                {cars.map((car,index) =>
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make:"/><br /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model:"/><br /><br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
        </>
    );
}
export default MyComponent2