import CountrySm from "../Country-small/CountrySm";

const CountryDe = ({country,visitCountriesClick,flagPicClick}) => {
    return (
        <div>
            <CountrySm
                country={country}
                visitCountriesClick={visitCountriesClick}
                flagPicClick={flagPicClick}
            ></CountrySm>
            
        </div>
    );
};

export default CountryDe;