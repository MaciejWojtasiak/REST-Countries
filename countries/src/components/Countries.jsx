import Country from "./Country";
import data from '../../data.json';


function Countries({ search, filter}) {
  let countries = [];   
  if(search === '' && filter === ''){ countries=data}
  else if(search != '' && filter === ''){
    countries = data.filter(item=>{ 
      return item.name.toLowerCase().includes(search.toLowerCase()); 
    });
  } else if(search === '' && filter != '' ) {
    countries = data.filter(item=>{ 
      return item.region.toLowerCase().includes(filter.toLowerCase()); 
    });
  } else {
    countries = data.filter(item=>{ 
      return item.region.toLowerCase().includes(filter.toLowerCase()) && item.name.toLowerCase().includes(search.toLowerCase()); 
    });
  }


  return (
    <div className="countries">
        {countries.map((country, index)=>{
           return <Country key={index} country={country} />
        })}
        
    </div>
  )
}

export default Countries