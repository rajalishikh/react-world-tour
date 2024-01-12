
import { useState } from 'react';
import CountryDe from '../Country-Details/CountryDe';
import './country.css';
const Country = ({ country,visitCountriesClick,flagPicClick}) => {
    console.log(country)
    console.log(visitCountriesClick)
    console.log(flagPicClick)
    
    
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
            
            <button onClick={handleClick}>{visited ? 'visited' : 'Going'}</button><br />
            <button onClick={() => visitCountriesClick(country)} >Visited list</button>
            <button onClick={()=>flagPicClick(country)}>FlagPhoto</button>
            {
                visited?"I am travel many country":"I am not going any country"

            }
            <hr />

            <CountryDe key={country.cca2} country={country}
                visitCountriesClick={visitCountriesClick}
                flagPicClick={flagPicClick}
            
            >

            </CountryDe>
            
            
        </div>
    );
};

export default Country;