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


export default class App extends Component {
  

  render() {
    return (
      <Router>
      <div>
        <Header></Header>
        <Link to='/'>HomePage</Link>
        <Link to='/about'>About</Link>
        {/* <PokeList pokedex={this.state.pokedex} /> */}
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path ='/:name?' component={PokeList} />
        </Switch>


      </div>
      </Router>
    )
  }
}
