function Country({country}) {
  return (
    <div className='country'>
        <img className="country_img" src={country.flag} alt="flag" />
        <div className="country_details">
            <h3 className="country_title">{country.name}</h3>
            <p className="country_population">Population: <span className="value pop-value">{country.population}</span></p>
            <p className="country_region">Region: <span className="value reg-value">{country.region}</span></p>
            <p className="country_capital">Capital: <span className="value cap-value">{country.capital}</span></p>
        </div>
    </div>
  )
}

export default Country