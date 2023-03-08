import Country from "./Country";
import data from '../../data.json';
function Countries() {
    const countries = data;    
  return (
    <div className="countries">
        {countries.map((country, index)=>{
           return <Country key={index} country={country} id={index}/>
        })}
        
    </div>
  )
}

export default Countries