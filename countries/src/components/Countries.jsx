import Country from "./Country";
import data from '../../data.json';


function Countries({ search}) {
  let countries = [];   
  if(search === ''){ countries=data}
  else {
    countries = data.filter(item=>{ 
      return item.name.toLowerCase().includes(search.toLowerCase()) 
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