import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/styles.css';

//import Logo from '../assets/images/logo.png'; // Importing image -> ADDED IN THIS STEP

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react

      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
