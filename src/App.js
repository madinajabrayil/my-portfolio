// import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
// import Menu from './components/Menu/Menu'
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
// import StartsBackground from './components/Home/StarsBackground/StarsBackground'


function App() {
    return ( 
    <div>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Portfolio/>
        <Contact/>
    </div>  
    );


}

export default App;