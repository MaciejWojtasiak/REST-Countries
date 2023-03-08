import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import "./sass/_main.scss";


function App() {
 
  return (
    <div className="App"> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/country/:id" element={<CountryPage />}/>
      </Routes>
    </Router>      
    </div>
  )
}

export default App
