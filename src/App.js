import './App.css';
import Accueil from './components/accueil/Accueil'
import Contact from './components/contacts/Contact'
import Home from './components/home/Home'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route
          exact
          path="/"
          render={()=>(<Redirect to='/accueil'/>)}
        />
        <Route exact path="/accueil" render={()=>(<Accueil/>)} />
        <Route exact path="/home" render={()=>(<Home/>)}/>
        <Route exact path="/contact" render = {()=>(<Contact/>)}/>
        <Route path='*' render={()=>(<Redirect to='/accueil'/>)}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;