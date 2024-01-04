import { useEffect, useState } from "react";
import Country from "../sub-country/country";

const Tour = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data));
        
    },[])

    return (
        <div>
            
            Name:{countries.length}
            {
                countries.map(item=><Country key={item.cca2} country={item}></Country>)
            }
            
            
        </div>
    );
};

export default Tour;