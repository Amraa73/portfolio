import './App.css';

// router
import { BrowserRouter} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"
import { IoMdMenu,IoMdExit  } from "react-icons/io";

// pages import
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <div className="header">
        <input type='checkbox' id='navBtn' />
            <div className="logo">
                <h2>My Portfolio</h2>
            </div>
            <ul className="navbar" id='navbar'>
                <li><Link to="#home" >Home</Link></li>
                <li><Link to="#about" >About</Link></li>
                <li><Link to="#service" >Services</Link></li>
                <li><Link to="#portfolio" >Portfolio</Link></li>
                <li><Link to="#contact" >Contact</Link></li>

                <label for="navBtn"><IoMdExit className='navbar-exit'/></label>
            </ul>
            <label for="navBtn"><IoMdMenu className='side-menu-icon'/></label>
      </div>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
    </BrowserRouter>
  );
}

export default App;
