import './App.css';
import Accueil from './components/accueil/Accueil'
import Contact from './components/contacts/Contact'
import Home from './components/home/Home'
import Wellness from './components/wellnessProviders/Wellness'
import Methode from './components/methode/Methode'
import Video from './components/video/Video'
import Blog from './components/blog/Blog'
import Formation from './components/formation/Formation'
import News from './components/news/News'
import Galerie from './components/galerie/Galerie'
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
        <Route exact path="/wellness" render = {()=>(<Wellness/>)}/>
        <Route exact path="/methode" render = {()=>(<Methode/>)}/>
        <Route exact path="/blog" render = {()=>(<Blog/>)}/>
        <Route exact path="/video" render = {()=>(<Video/>)}/>
        <Route exact path="/formation" render = {()=>(<Formation/>)}/>
        <Route exact path="/news" render = {()=>(<News/>)}/>
        <Route exact path="/galerie" render = {()=>(<Galerie/>)}/>
        <Route path='*' render={()=>(<Redirect to='/accueil'/>)}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;