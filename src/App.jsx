import {HashRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import "./sass/_main.scss";
import { ThemeContext } from "./contexts/theme-context";
import { useState } from "react";


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr)=>( curr === "light" ? "dark":"light"));
  }
 
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}> 
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/country/:id" element={<CountryPage />}/>
        </Routes>
      </HashRouter>      
      </div>
    </ThemeContext.Provider>
  )
}

export default App
