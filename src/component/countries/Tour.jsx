import { useEffect, useState } from "react";

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
            
            
            
        </div>
    );
};

export default Tour;