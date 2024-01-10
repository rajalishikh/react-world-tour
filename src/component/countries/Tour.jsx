import { useEffect, useState } from "react";
import Country from "../sub-country/country";
import "./Tour.css";

const Tour = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitCountries] = useState([]);

    const visitCountriesClick = (country) => {
        console.log(country);
        console.log('add my country list ');
        const newCountries = [...visitCountries, country];
        setVisitCountries(newCountries)

    }
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data));
        
    }, [])
    
    

    return (
        <div>
            
            Name:{countries.length}
            <h2>The total list of my countries:{ visitCountries.length}</h2>
            <ol>
                {
                    visitCountries.map(item2 =>
                        <li key={item2.cca2}>{ item2.name.common}</li>
                        )
                }
                
            </ol>
            <div className="tour">
           

            {
                    countries.map(item => <Country 
                        visitCountriesClick={visitCountriesClick}
                       
                       
                        
                        key={item.cca2} country={item}></Country>)
                }
                
           </div>
            
            
        </div>
    );
};

export default Tour;