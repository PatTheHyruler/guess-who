import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from './LandingPage.js'
import About from './About.js'
import Privacy from './Privacy.js'
import HowToPlay from './HowToPlay.js'
import Toe from './Toe.js'
import Game from './Game.js'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <div>
      <nav className="nav-bar">
        <ul className="nav-container">
          <li className="home">
            <Link exact to="/" className="nav-link">guess who?</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/how" className="nav-link">How To Play</Link>
          </li>
          <li>
            <Link to="/privacy" className="nav-link">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/toe" className="nav-link">Tic Tac Toe</Link>
          </li>
          

        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/how" component={HowToPlay}/>
        // todo: change back to landing page
        <Route exact path="/" component={LandingPage} />
        <Route path="/toe" component={Toe} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
