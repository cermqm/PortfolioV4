import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          {/* Set up the Router */}
          <Route exact path="/" component={About} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />

        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo Image" /> */}
          <div className="navigation-sub">
            <Link to="About" className="item">About</Link>
            <Link to="Portfolio" className="item">Portfolio</Link>
            <Link to="Contact" className="item">Contact</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
