import { Link } from "react-router-dom"

function SingleCountry({flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies, languages,borders}) {
  return (
    <div className="singleCountry">
        <Link className="link" to={"/"}>
            <button className="btn back-btn"><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
        </Link>
        <div className="single_country">
            <img className="country_img" src={flag} alt="flag" />
            <div className="country_details">
              <h2 className="country_name">{name}</h2>
              <div className="country_props">
                <div className="col">
                  <p className="country_nName">Native Name: <span className="value">{nativeName}</span></p>
                  <p className="country_population">Population: <span className="value">{population.toLocaleString('en-EN')}</span></p>
                  <p className="country_region">Region: <span className="value">{region}</span></p>
                  <p className="country_subregion">Subregion: <span className="value">{subregion}</span></p>
                  <p className="country_capital">Capital: <span className="value">{capital}</span></p>
                </div>
                
                <div className="col">
                  <p className="country_topLevelDomain">Top Level Domain: <span className="value">{topLevelDomain}</span></p>
                  <p className="country_currencies">Currencies: <span className="value">{currencies ? currencies.map((currency)=>currency.name) : ""}</span></p>
                  <p className="country_languages">Languages: <span className="value">{languages ? languages.map((language)=> language.name ): ""}</span></p>  
                </div>
               
              </div>
              <div className="borders-container">
                <p className="country_borders">Border Countries: </p><div className="links">{borders ? borders.map((border)=>(<span className="value"><Link className="link border-link" to={`/country/${border}`}>{border}</Link></span>)): "No borders."}</div>
              </div>
              
            </div>
        </div>
      
    </div>
  )
}

export default SingleCountry