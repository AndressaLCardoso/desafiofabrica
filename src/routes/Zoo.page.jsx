import { useEffect, useState } from "react";
import Zoo from "../components/Zoo";

const ZooPage = () => {

    const [animal, setAnimal] = useState({});

    useEffect(() => {
        getAnimal();
    }, []);

    const getAnimal = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },   
        });
        const data = await response.json();
        setAnimal(data);
    };

    return (
        <main>
            <Zoo animal={animal} getAnimal={getAnimal} exibir={true}/>
        </main>
    );
};

export default ZooPage;