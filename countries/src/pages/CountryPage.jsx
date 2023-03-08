import SingleCountry from "../components/SingleCountry";
import { useLocation } from "react-router-dom";
import data from '../../data.json';

function CountryPage() {
  const location = useLocation();
  const pageID = location.pathname.split('/').pop();
  const countryData = data[pageID];
  return (
    <div className="countryPage">
        <SingleCountry
         flag={countryData.flag}
         name={countryData.name}
         nativeName={countryData.nativeName}
         population={countryData.population}
         region={countryData.region}
         subregion={countryData.subregion}
         capital={countryData.capital}
         topLevelDomain={countryData.topLevelDomain}
         currencies={countryData.currencies}
         languages={countryData.languages}
         borders={countryData.borders}
         />
    </div>
  )
}

export default CountryPage