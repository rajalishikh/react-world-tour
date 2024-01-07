
import { useState } from 'react';
import './country.css';
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, cca2, } = country;
    const [visited, setVisited] = useState(false);
    const handleClick = () => {
        setVisited(!visited)
    }
    
    return (
        <div className={`country-border ${visited?'visited-color':'non-visited-color'}`}>
            <p>Name:{name.common}</p>
            <img src={flags.png} alt="" />
            <p>Population :{ population}</p>
            <p><small>Code:{cca2}</small> </p>
            
            <button onClick={handleClick}>{ visited?'visited':'Going'}</button>
            {
                visited?"I am travel many country":"I am not going any country"

            }
            
            
        </div>
    );
};

export default Country;