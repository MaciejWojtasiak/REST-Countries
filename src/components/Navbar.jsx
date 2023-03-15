import { useState } from "react"
import { Link } from "react-router-dom";

function Navbar() {
  const [mode, setMode] = useState("dark");

  const handleClick = () => mode === "dark" ? setMode('light') : setMode('dark');    
  

  return (
    <nav className='navbar'>
        <Link className="link" to="/">
          <p className="slogan">Where in the world?</p>
        </Link>
        <div className="mode-switch" onClick={handleClick}>
          {mode==="dark" ? (<><ion-icon name="moon-outline"></ion-icon><span className="mode-text">Dark Mode</span></>) :
           (<><ion-icon name="sunny-outline"></ion-icon><span className="mode-text">Light Mode</span></>)
           }
        </div>
    </nav>
  )
}

export default Navbar