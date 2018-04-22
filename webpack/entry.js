import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import BurgerMenu from './components/BurgerMenu';
class App extends Component {
  render() {
    return (
      <Hello />
    )
  }
}



/*render(<App />, document.getElementById('root'));*/

render(<BurgerMenu />, document.getElementById('react-burger-menu-root'));
