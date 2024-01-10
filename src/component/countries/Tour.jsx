import { useEffect, useState } from "react";
import Country from "../sub-country/country";
import "./Tour.css";

const Tour = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitCountries] = useState([]);
    const [flag, setFlag] = useState([]);


    const visitCountriesClick = (country) => {
        console.log(country);
        console.log('add my country list ');
        const newCountries = [...visitCountries, country];
        setVisitCountries(newCountries)

    }
    const flagPicClick = (flag2) => {
        const newFlag = [...flag, flag2];
        setFlag(newFlag);
        
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
            {/* show the flag pictuer */}
            <h3>Here is the pictuer</h3>
            {
                flag.map(item3=><img key={item3.cca2} src={item3.flags.png} width='100px'></img>)
            }
            <div className="tour">
                {/* display the item  */}
           

            {
                    countries.map(item => <Country 
                        visitCountriesClick={visitCountriesClick}
                        flagPicClick={flagPicClick}
                        key={item.cca2} country={item}></Country>)
                }
                
           </div>
            
            
        </div>
    );
};

export default Tour;