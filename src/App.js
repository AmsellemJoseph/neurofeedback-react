import './App.css';
import Nav from './components/NavBar/Nav'
import Accueil from './components/accueil/Accueil'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/'
        exact
        render={()=>(<Redirect to='/Accueil'/>)}
        />
        <Route path='/Accueil'
        exact
        render={()=>(<Accueil />)}
        />
      </div>
    </Router>
  );
}

export default App;