import React from 'react';
import { Switch, Router, Route } from 'react-router';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Card3D from './components/Spring/Card3D/Card';
import FlipCard from './components/Spring/FlipCard/Card';
import DraggableList from './components/Springs/DraggableList/DraggableList';
import Slider from './components/Spring/Slider/Slider';
import Trails from './components/Trails/Trails';
import Simple from './components/Transitions/Simple/Simple';
import Fade from './components/Transitions/Fade/Fade';

import createHistory from 'history/createBrowserHistory';

const history = createHistory({});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Hooks Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/state">State</Link>
                <Link to="/effect">Effect</Link>
                <Link to="/custom">Custom</Link>
                <Link to="/others">Other Hooks</Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link to="/spring/card3d">3D Card</Link>
                  <Link to="/spring/flipcard">Flip Card</Link>
                  <Link to="/spring/slider">Slider</Link>
                  <NavDropdown.Divider />
                  <Link to="#action/3.4">Separated link</Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/spring/card3d" component={Card3D} />
          <Route exact path="/spring/flipcard" component={FlipCard} />
          <Route
            exact
            path="/springs/draglist"
            render={() => (
              <DraggableList items={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />
            )}
          />
          <Route exact path="/spring/slider" component={Slider} />} />
          <Route exact path="/trails" component={Trails} />} />
          <Route exact path="/transition/simple" component={Simple} />} />
          <Route exact path="/transition/fade" component={Fade} />} />
        </Switch>
      </Router>

      {/* <FlipCard /> */}
      {/* <DraggableList items={['I', 'Love', 'Lindsay', 'Blackwell']} /> */}
      {/* <Slider /> */}
      {/* <Trails /> */}
      {/* <Simple /> */}
      {/* <Fade /> */}
    </div>
  );
}

export default App;
