// import Search from "../components/Search";
import Countries from "../components/Countries";

import {useState } from 'react';

function Home() {   
  const [searchInput, setSearchInput] = useState('');
  const [filterInput, setFilterInput] = useState('');

  const handleSearchChange = (e) => {
   setSearchInput(e.target.value);    
  }

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);       
   }

  return (
    <div className='home'>
      <div className="search">
        <div className="input-box">
            <ion-icon name="search-outline"></ion-icon>
            <input onChange={handleSearchChange} className="search_input" type="text" placeholder="Search for a country..."/>
        </div>
       
        <select onChange={handleFilterChange} className="search_select" defaultValue={"filter"}>
            <option value="filter" disabled={true}>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
    
      <Countries search={searchInput} filter={filterInput}/>
    </div>
  )
}

export default Home