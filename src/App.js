import React, { Component }from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from './Header.js';
import PokeList from './PokeList.js';
import About from './About.js';
import './App.css';
import PokeDetail from './PokeDetail.js';


export default class App extends Component {
  

  render() {
    return (
      <Router>
      <div>
        <Header></Header>
        <div className='links'>

        <Link to='/'>HomePage</Link>
        <Link to='/about'>About</Link>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path ='/:name?' component={PokeList} />
          <Route exact path ='/pokemon/:_id' component={PokeDetail} />
        </Switch>
        </div>


      </div>
      </Router>
    )
  }
}
