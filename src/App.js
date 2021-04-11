import './App.css';
import Nav from './components/NavBar/Nav'
import Accueil from './components/accueil/Accueil'
import Contact from './components/contacts/Contact'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route
          exact
          path="/"
          render={()=>(<Redirect to='/accueil'/>)}
        />
        <Route exact path="/accueil" render={()=>(<Accueil/>)} />
        <Route exact path="/contact" render = {()=>(<Contact/>)}/>
        <Route path='*' render={()=>(<Redirect to='/accueil'/>)}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;