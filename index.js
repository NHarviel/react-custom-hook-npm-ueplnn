import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// If you classes in React, this code should look familiar:

// Components
import Counter from './Counter';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <Counter />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
