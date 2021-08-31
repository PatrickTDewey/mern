import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      < >
        <h1 className="h1">Hello Dojo</h1>
        <h3>Things I need to do</h3>
        <ul>
          <li>Learn React</li>
          <li>Climb Mount Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </>
    );
  }
}

export default App;
