function Search() {
  return (
    <div className="search">
        <div className="input-box">
            <ion-icon name="search-outline"></ion-icon>
            <input className="search_input" type="text" placeholder="Search for a country..."/>
        </div>
       
        <select className="search_select" >
            <option value="filter" disabled="true" selected="true">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Search