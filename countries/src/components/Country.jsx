function Country() {
  return (
    <div className='country'>
        <img src="" alt="flag" />
        <h3 className="country_title"></h3>
        <p className="country_population">Population: <span className="pop-value">81,770,900</span></p>
        <p className="country_region">Region: <span className="reg-value">Europe</span></p>
        <p className="country_capital">Capital: <span className="cap-value">Berlin</span></p>
    </div>
  )
}

export default Country