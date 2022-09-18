import { useEffect, useState } from "react";
import Zoo from "../components/Zoo";

const ZooGaleryPage = () => {

    const [animals, setAnimals] = useState([]);

    useEffect( () =>{
        getAnimals();
    }, []);

    const getAnimals = async() => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },   
        });
        const data = await response.json();
        setAnimals(data);
    }

    return (
        <main> 
            { 
                animals.map( (animal , index) => 
                <Zoo key={index} animal={animal}/>) 
            }            
        </main>
    );
};

export default ZooGaleryPage;