import './App.css';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Menu from './components/Menu/Menu';


function App() {

    return (
        <div>
            <Home/>
            <Menu/>
            <About/>
            <Skills/>
            <Education/>
            <Portfolio/>
            <Contact/>
        </div>
    );


}

export default App;
