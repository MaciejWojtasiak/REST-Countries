import { useState } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <nav className='navbar'>
        <Link className="link" to="/">
          <p className="slogan">Where in the world?</p>
        </Link>
        <div className="mode-switch" onClick={toggleTheme}>
          {theme==="dark" ? (<><ion-icon name="moon-outline"></ion-icon><span className="mode-text">Dark Mode</span></>) :
           (<><ion-icon name="sunny-outline"></ion-icon><span className="mode-text">Light Mode</span></>)
           }
        </div>
    </nav>
  )
}

export default Navbar